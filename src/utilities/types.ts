interface FrontMatter {
    title?: string
    date?: string
    author?: string
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
