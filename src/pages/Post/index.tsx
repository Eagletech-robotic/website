import { useLoaderData } from 'react-router-dom'
import { checkFrontMatter, getBlogPostById } from 'src/utils/posts'
import {
    Author,
    BreadCrumbs,
    BreadCrumbSeperator,
    Content,
    DraftIcon,
    ErrorInfo,
    Header,
    Info,
    LinkBack,
    Page,
    Separator,
    Title,
} from './styles'
import { PageStructure } from 'src/styles/commonStyles'
import { isoToFullDate } from 'src/utils/date'

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
            <BreadCrumbs>
                <LinkBack to="..">Blog</LinkBack>
                <BreadCrumbSeperator> » </BreadCrumbSeperator>
                <span>{title}</span>
            </BreadCrumbs>
            <Page>
                <Header>
                    <Title>{title}</Title>
                    <Info>
                        Publié par <Author>{author}</Author> le <i>{isoToFullDate(date)}</i>.
                    </Info>
                    {result.draft && <DraftIcon src="/images/draft-icon.svg" alt="Brouillon" />}
                </Header>

                <Separator />

                <Content dangerouslySetInnerHTML={{ __html: post.post.value }} />
            </Page>
        </PageStructure>
    )
}
