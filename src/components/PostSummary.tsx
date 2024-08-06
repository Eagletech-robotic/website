import { NavLink } from 'react-router-dom'
import { checkFrontMatter } from '../utils/posts'

function Container({ children }: { children: React.ReactNode }) {
    return <div style={{ border: '2px solid black', maxHeight: '12rem', overflow: 'hidden' }}>{children}</div>
}

export default function PostSummary({ blogPost }: { blogPost: BlogPost }) {
    const { result, isError } = checkFrontMatter(blogPost.post.data.matter)
    if (isError)
        return (
            <Container>
                {result.map((error, index) => (
                    <div key={index} style={{ color: 'red' }}>
                        {error}
                    </div>
                ))}
            </Container>
        )

    const { summary } = result

    return (
        <Container>
            <NavLink to={`posts/${blogPost.id}`} style={{ textDecoration: 'none' }}>
                <div dangerouslySetInnerHTML={{ __html: summary }}></div>
            </NavLink>
        </Container>
    )
}
