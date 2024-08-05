interface FrontMatter {
    title?: string
    date?: string
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
