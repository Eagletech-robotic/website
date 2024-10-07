import { useLoaderData } from 'react-router-dom'
import { checkFrontMatter, getBlogPostById } from 'src/utils/posts'
import {
    Author,
    Content,
    DraftIcon,
    ErrorInfo,
    Header,
    Info,
    LinkBack,
    Page,
    ScrollToTopButton,
    Separator,
    Title,
} from './styles'
import { isoToFullDate } from 'src/utils/date'
import { PageStructure } from 'src/styles/sharedStyledComponents'

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
                    <LinkBack to="..">Blog »</LinkBack>
                    <Title>{title}</Title>
                    <Info>
                        Publié par <Author>{author}</Author> le <i>{isoToFullDate(date)}</i>.
                    </Info>
                    {result.draft && <DraftIcon src="/images/draft-icon.svg" alt="Brouillon" />}
                </Header>

                <Separator />

                <Content dangerouslySetInnerHTML={{ __html: post.post.value }} />
            </Page>

            <ScrollToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </ScrollToTopButton>
        </PageStructure>
    )
}
