import { useBlogPosts } from '../utilities/markdown'
import { NavLink } from 'react-router-dom'

export default function Blog() {
    const blogPosts = useBlogPosts()

    blogPosts.sort((a: BlogPost, b: BlogPost) => {
        const dateA = a.post.data.matter?.date || '1970-01-01'
        const dateB = b.post.data.matter?.date || '1970-01-01'

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

            {blogPosts.map((blogPost) => {
                const synopsis = blogPost.post.data.matter?.synopsis
                let textToDisplay = synopsis ? synopsis : blogPost.post.value

                return (
                    <NavLink to={`posts/${blogPost.id}`} key={blogPost.id} style={{ textDecoration: 'none' }}>
                        <ul
                            dangerouslySetInnerHTML={{ __html: textToDisplay }}
                            style={{ border: '2px solid black', maxHeight: '12rem', overflow: 'hidden' }}
                        />
                    </NavLink>
                )
            })}
        </>
    )
}
