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

    return (
        <>
            <ul dangerouslySetInnerHTML={{ __html: post.post.value }} />
        </>
    )
}
