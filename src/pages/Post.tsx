import { useLoaderData } from 'react-router-dom'
import { checkFrontMatter, getBlogPostById } from '../utils/posts'

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

    const { result, isError } = checkFrontMatter(post.post)

    if (isError) {
        return (
            <div>
                {post.post.path}
                {result.map((error, index) => (
                    <div key={index} style={{ marginLeft: '2rem', color: 'red' }}>
                        {error}
                    </div>
                ))}
            </div>
        )
    }

    const { author, title, date } = result

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '5rem', marginBottom: 0 }}>{title}</h1>
                <div>
                    By<div style={{ fontStyle: 'italic' }}>{author}</div>
                </div>
                <br></br>
                <div style={{ fontStyle: 'italic' }}>{date}</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <ul dangerouslySetInnerHTML={{ __html: post.post.value }} />
        </>
    )
}
