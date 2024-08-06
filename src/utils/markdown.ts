export function loadMarkdownFiles(): Post[] {
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
            value: content as string,
            data: {},
        })
    }

    return posts
}
