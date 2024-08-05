import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import { matter } from 'vfile-matter'
import { VFile } from 'remark-rehype/lib'
import React from 'react'

export function useBlogPosts(): BlogPost[] {
    const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([])
    React.useEffect(() => {
        void (async () => {
            const blogPosts = await fetchBlogPosts()
            setBlogPosts(blogPosts)
        })()
    }, [])

    return blogPosts
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
    const blogPosts = await fetchBlogPosts()
    for (const blogPost of blogPosts) {
        if (blogPost.id === id) return blogPost
    }

    return null
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
    const markdowns = loadMarkdownFiles()

    const promises: Array<Promise<BlogPost | null>> = markdowns.map(async (markdown) => {
        const post = unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(remarkGfm)
            .use(remarkNormalizeHeadings)
            .use(remarkMath)
            .use(remarkFrontmatter)
            .use(rehypeKatex)
            .use(rehypeStringify)
            .use(() => (_tree: any, file: VFile) => matter(file))
            .process(markdown.content) as Promise<Post>

        const blogPost = toBlogPost(await post, markdown.path)

        if (shouldDisplay(blogPost)) return blogPost
        else return null
    })

    const blogPosts = (await Promise.all(promises)).filter((item) => item != null)
    return blogPosts
}

function shouldDisplay(post: BlogPost): boolean {
    const isDevelopment = import.meta.env.VITE_SHOW_DRAFTS === 'true'

    let displayPost = true
    if (post.post.data.matter?.draft) {
        displayPost = isDevelopment
    }

    return displayPost
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

function loadMarkdownFiles(): { path: string; content: string }[] {
    const markdownFiles = import.meta.glob('/src/assets/blog-posts/**/*.md', {
        import: 'default',
        query: 'raw',
        eager: true, // defaults to false
    })
    const posts = []

    for (const path in markdownFiles) {
        const content = markdownFiles[path]
        posts.push({
            path,
            content: content as string,
        })
    }

    return posts
}
