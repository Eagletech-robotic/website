import { useLoaderData } from 'react-router-dom'
import { getBlogPostById } from '../utilities/markdown'

export async function loader({ params }: any): Promise<BlogPost> {
    const post = await getBlogPostById(params.postId)
    if (!post) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        })
    }

    return post
}

export default function Post() {
    const post = useLoaderData() as BlogPost
    const matter = post.post.data.matter

    let titleText = matter?.title ? (
        <h1 style={{ fontSize: '5rem', marginBottom: 0 }}>{matter?.title}</h1>
    ) : (
        <h1 style={{ fontSize: '5rem', marginBottom: 0, fontStyle: 'italic' }}>No Title</h1>
    )

    let authorText = matter?.author ? (
        <div>
            By<div style={{ fontStyle: 'italic' }}>{matter?.author}</div>
        </div>
    ) : (
        <div style={{ fontStyle: 'italic' }}>Author not specified</div>
    )

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {titleText}
                {authorText}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <ul dangerouslySetInnerHTML={{ __html: post.post.value }} />
        </>
    )
}
