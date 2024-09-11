import { checkFrontMatter } from 'src/utils/posts'
import { isoToFullDate } from 'src/utils/date'
import { Container, ErrorInfo, Footer, StyledPostSummary, Summary, Title } from './styles'

export default function PostSummary({ blogPost }: { blogPost: BlogPost }) {
    const { result, isError } = checkFrontMatter(blogPost.post)
    if (isError)
        return (
            <StyledPostSummary to={`posts/${blogPost.id}`}>
                <Container>
                    <div>{blogPost.post.path}</div>
                    {result.map((error, index) => (
                        <ErrorInfo key={index}>{error}</ErrorInfo>
                    ))}
                </Container>
            </StyledPostSummary>
        )

    return (
        <StyledPostSummary to={`posts/${blogPost.id}`}>
            <Container>
                <Title>{result.title}</Title>
                <Summary>{result.summary}</Summary>
                <Footer>
                    {isoToFullDate(result.date)} · {result.author}
                </Footer>
            </Container>
        </StyledPostSummary>
    )
}
