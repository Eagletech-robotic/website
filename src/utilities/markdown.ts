import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { VFile } from 'vfile'

export async function getBlogPosts(): Promise<string[]> {
    const markdowns = loadMarkdownFiles()

    const promises: Array<Promise<VFile>> = markdowns.map((markdown) =>
        unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(remarkGfm)
            .use(remarkNormalizeHeadings)
            .use(remarkMath)
            .use(remarkFrontmatter)
            .use(rehypeStringify)
            .process(markdown.content)
    )

    const vfiles = await Promise.all(promises)

    const posts = vfiles.map((vfile) => vfile.toString())

    return posts
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
