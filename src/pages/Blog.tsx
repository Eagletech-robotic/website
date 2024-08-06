import PostSummary from '../components/PostSummary'
import { useBlogPosts } from '../utils/markdown'

export default function Blog() {
    const blogPosts = useBlogPosts()

    blogPosts.sort((a: BlogPost, b: BlogPost) => {
        const dateA = a.post.data.matter?.date || '1970-01-01'
        const dateB = b.post.data.matter?.date || '1970-01-01'
        return dateA < dateB ? 1 : -1
    })

    return (
        <>
            <h1>Blog Page</h1>
            <h2>Our blogs:</h2>
            <br></br>

            {blogPosts.map((blogPost, index) => (
                <PostSummary blogPost={blogPost} key={index} />
            ))}
        </>
    )
}
