export function loadMarkdownFiles(): { path: string; content: string }[] {
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
