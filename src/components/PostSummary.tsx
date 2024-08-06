import { NavLink } from 'react-router-dom'
import { checkFrontMatter } from '../utils/posts'

function Container({ children }: { children: React.ReactNode }) {
    return <div style={{ border: '2px solid black', maxHeight: '12rem', overflow: 'hidden' }}>{children}</div>
}

export default function PostSummary({ blogPost }: { blogPost: BlogPost }) {
    const { result, isError } = checkFrontMatter(blogPost.post)
    if (isError)
        return (
            <Container>
                <div>{blogPost.post.path}</div>
                {result.map((error, index) => (
                    <div key={index} style={{ color: 'red', marginLeft: '2rem' }}>
                        {error}
                    </div>
                ))}
            </Container>
        )

    const { summary } = result

    return (
        <Container>
            <NavLink to={`posts/${blogPost.id}`} style={{ textDecoration: 'none' }}>
                <div>{summary}</div>
            </NavLink>
        </Container>
    )
}
