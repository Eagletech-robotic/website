import * as React from 'react'

import { getBlogPosts } from '../utilities/markdown'

export default function Blog() {
    const [posts, setPosts] = React.useState<string[]>([])
    React.useEffect(() => {
        void (async () => {
            const blogPosts = await getBlogPosts()
            setPosts(blogPosts)
        })()
    }, [])

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
