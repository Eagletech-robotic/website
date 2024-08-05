interface FrontMatter {
    title?: string
    date?: string
    author?: string
    draft?: boolean
}

interface BlogPost {
    post: Post
    id: string
}

interface Post {
    data: {
        matter?: FrontMatter
    }
    value: string
}
