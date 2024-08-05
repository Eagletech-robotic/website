import * as React from 'react'
import { getBlogPosts } from '../utilities/markdown'
import 'katex/dist/katex.min.css'

export default function Blog() {
    const [posts, setPosts] = React.useState<PostFile[]>([])
    React.useEffect(() => {
        void (async () => {
            const blogPosts = await getBlogPosts()
            setPosts(blogPosts)
        })()
    }, [])

    posts.sort((a: PostFile, b: PostFile) => {
        const dateA = a.data.matter?.date || '1970-01-01'
        const dateB = b.data.matter?.date || '1970-01-01'

        if (dateA > dateB) {
            return -1
        } else {
            return 1
        }
    })

    return (
        <>
            <h1>Blog Page</h1>
            <h2>Our blogs:</h2>
            <br></br>

            {posts.map((__html, index) => (
                <ul key={index} dangerouslySetInnerHTML={{ __html }} style={{ border: '2px solid black' }} />
            ))}
        </>
    )
}
