interface FrontMatter {
    title?: string
    date?: string
}

interface PostFile {
    data: {
        matter?: FrontMatter
    }
    value: string
}
