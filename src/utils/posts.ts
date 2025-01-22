import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { visit } from 'unist-util-visit'
import { matter } from 'vfile-matter'
import { ElementContent, Root } from 'hast'
import * as React from 'react'
import { loadMarkdownFiles } from './markdown'
import { VFile } from 'vfile-matter/lib'

export function checkFrontMatter(
    post: Post
): { result: string[]; isError: true } | { result: Required<FrontMatter>; isError: false } {
    const { author, date, summary, title, draft } = post.data.matter || {}

    const errors: string[] = []
    const pushError = (error: string) => {
        errors.push(`Le champ suivant n'a pas été défini : ${error}`)
    }

    if (!author) pushError('author')
    if (!date) pushError('date')
    if (!summary) pushError('summary')
    if (!title) pushError('title')
    if (draft === undefined) pushError('draft')

    if (errors.length) {
        return { result: errors, isError: true }
    } else {
        return {
            result: {
                author: author!,
                date: date!,
                summary: summary!,
                title: title!,
                draft: draft!,
            },
            isError: false,
        }
    }
}

export function useBlogPosts(): { blogPosts: BlogPost[]; loading: boolean } {
    const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        void (async () => {
            const blogPosts = await fetchBlogPosts()
            setBlogPosts(blogPosts)
            setLoading(false)
        })()
    }, [])

    return { blogPosts, loading }
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
    const blogPost = (await fetchBlogPosts(id))[0]
    return blogPost
}

async function fetchBlogPosts(id?: string): Promise<BlogPost[]> {
    const markdowns: Post[] = loadMarkdownFiles().filter((post) => {
        if (id) return hash(post.path) === id
        else return true
    })

    const promises: Array<Promise<BlogPost | null>> = markdowns.map((post) => {
        return processPost(post)
    })

    const blogPosts = (await Promise.all(promises)).filter((item) => item != null)

    return blogPosts
}

async function processPost(post: Post): Promise<BlogPost | null> {
    console.log(`Processing post: ${post.path}`)
    const vfile = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkFrontmatter)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypePrettyCode, {
            defaultLang: 'plaintext',
            theme: 'dark-plus',
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
            bypassInlineCode: true,
        })
        .use(wrapTables)
        .use(addAnchorToHeadings)
        .use(addCodeTypeProperties)
        .use(rehypeStringify)
        .use(() => (_tree: any, file: VFile) => matter(file))
        .process(post.value)

    const processedPost: Post = {
        data: (await vfile).data as any,
        value: (await vfile).value as string,
        path: post.path,
    }

    const blogPost = toBlogPost(await processedPost, post.path)

    if (shouldDisplay(blogPost)) return blogPost
    else return null
}

function addCodeTypeProperties() {
    return (tree: Root) => {
        visit(tree, 'element', (node) => {
            if (node.tagName === 'pre') {
                const firstChild = node.children[0]
                if (firstChild && 'tagName' in firstChild && firstChild.tagName === 'code') {
                    firstChild.properties = {
                        ...firstChild.properties,
                        'data-code-type': 'block',
                        'data-line-numbers': 'true',
                    }
                }
            } else {
                for (const child of node.children) {
                    if ('tagName' in child && child.tagName === 'code') {
                        child.properties = {
                            ...child.properties,
                            'data-code-type': 'inline',
                        }
                    }
                }
            }
        })
    }
}

function wrapTables() {
    return (tree: Root) => {
        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName === 'table') {
                const wrapper: ElementContent = {
                    type: 'element',
                    tagName: 'div',
                    properties: { className: ['table-wrapper'] },
                    children: [node],
                }

                if (parent) {
                    parent.children.splice(index as number, 1, wrapper)
                }
            }
        })
    }
}

function addAnchorToHeadings() {
    return (tree: Root) => {
        visit(tree, 'element', (node) => {
            if (node.tagName.match(/^h[1-3]$/)) {
                const firstChild = node.children[0]
                if (!firstChild || firstChild.type !== 'text') return

                const id = (firstChild.value || '')
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9à-ü-]/g, '')
                node.properties.id = id

                // Create an anchor element
                const anchor: ElementContent = {
                    type: 'element',
                    tagName: 'a',
                    properties: {
                        href: `#${id}`,
                        className: ['header-anchor'],
                    },
                    children: [{ type: 'text', value: '#' }],
                }

                // Prepend the anchor to the node's children
                node.children.unshift(anchor)
            }
        })
    }
}

function shouldDisplay(post: BlogPost): boolean {
    const isDevelopment = import.meta.env.VITE_SHOW_DRAFTS === 'true'
    const isDraft = post.post.data.matter?.draft

    return (isDraft && isDevelopment) || !isDraft
}

function toBlogPost(post: Post, path: string): BlogPost {
    const blogPost = {
        post,
        id: hash(path),
    }

    return blogPost
}

function hash(input: string): string {
    let hash = 0
    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash |= 0 // Convert to 32-bit integer
    }

    // Convert hash to a base-36 string and ensure it is 8 characters long
    return Math.abs(hash).toString(36).padStart(8, '0').slice(0, 8)
}
