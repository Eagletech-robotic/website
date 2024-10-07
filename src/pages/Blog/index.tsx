import { useBlogPosts } from 'src/utils/posts'
import { Intro, Page, Title } from './styles'
import MobilePostsList from 'src/components/Blog/MobilePostsList'
import DesktopPostsList from 'src/components/Blog/DesktopPostsList'
import { LoadingSpinner, PageStructure } from 'src/styles/sharedStyledComponents'

export default function Blog() {
    const { blogPosts, loading } = useBlogPosts()

    blogPosts.sort((a: BlogPost, b: BlogPost) => {
        const dateA = a.post.data.matter?.date || '1970-01-01'
        const dateB = b.post.data.matter?.date || '1970-01-01'
        return dateA < dateB ? 1 : -1
    })

    return (
        <PageStructure>
            <Page>
                <Title>Le Blog de l'Equipe EagleTech 🔥</Title>
                <Intro>
                    <p>Salut. Ceci est notre blog 📖.</p>

                    <p>
                        C'est simplement un endroit où nous postons de temps en temps des articles
                        sur notre équipe et l'avancée de nos projets.
                    </p>
                </Intro>

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <MobilePostsList blogPosts={blogPosts} />
                        <DesktopPostsList blogPosts={blogPosts} />
                    </>
                )}
            </Page>
        </PageStructure>
    )
}
