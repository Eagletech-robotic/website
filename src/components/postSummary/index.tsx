import { NavLink } from 'react-router-dom'
import { checkFrontMatter } from '../../utils/posts'
import Container from './Container'
import { isoToFullDate } from '../../utils/date'

export default function PostSummary({ blogPost }: { blogPost: BlogPost }) {
    const { result, isError } = checkFrontMatter(blogPost.post)
    if (isError)
        return (
            <NavLink to={`posts/${blogPost.id}`} style={{ textDecoration: 'none' }}>
                <Container>
                    <div>{blogPost.post.path}</div>
                    {result.map((error, index) => (
                        <div key={index} style={{ color: 'red', marginLeft: '2rem' }}>
                            {error}
                        </div>
                    ))}
                </Container>
            </NavLink>
        )

    return (
        <NavLink to={`posts/${blogPost.id}`} style={{ textDecoration: 'none' }}>
            <Container>
                <h2>{result.title}</h2>
                <div className="summary">{result.summary}</div>
                <div className="footer">
                    {isoToFullDate(result.date)} · {result.author}
                </div>
            </Container>
        </NavLink>
    )
}
