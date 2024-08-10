import { useLoaderData } from 'react-router-dom'
import { checkFrontMatter, getBlogPostById } from '../../utils/posts'
import { Author, AuthorContainer, Content, DateText, ErrorInfo, Header, Info, Page, Separator, Title } from './styles'
import { PageStructure } from '../../styles/commonStyles'

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
                    <ErrorInfo key={index}>{error}</ErrorInfo>
                ))}
            </div>
        )
    }

    const { author, title, date } = result

    return (
        <PageStructure>
            <Page>
                <Header>
                    <Title>{title}</Title>
                    <Info>
                        <AuthorContainer>
                            By
                            <Author>{author}</Author>
                        </AuthorContainer>
                        <DateText>{date}</DateText>
                    </Info>
                </Header>

                <Separator />

                <Content dangerouslySetInnerHTML={{ __html: post.post.value }} />
            </Page>
        </PageStructure>
    )
}
