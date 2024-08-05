interface FrontMatter {
    title?: string
    date?: string
    author?: string
    synopsis?: string
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
