import PostSummary from '../../components/PostSummary'
import { useBlogPosts } from '../../utils/posts'
import coupeDeRobotiqueLogo from '/images/CDR-logo.jpg'
import { Intro, Page, Title } from './styles'
import { PageStructure, StyledA, StyledLink } from '../../styles/commonStyles'
import { InlineLogo } from '../../styles/inlineLogo'

export default function Blog() {
    const blogPosts = useBlogPosts()

    blogPosts.sort((a: BlogPost, b: BlogPost) => {
        const dateA = a.post.data.matter?.date || '1970-01-01'
        const dateB = b.post.data.matter?.date || '1970-01-01'
        return dateA < dateB ? 1 : -1
    })

    return (
        <PageStructure>
            <Page>
                <Title>The EagleTech Blog 🔥</Title>
                <Intro>
                    <p>Hi. This is our blog page 📖.</p>

                    <p>
                        As you may have seen, we are a new robotics club based in south of France.
                        The 2024-25 season will be our <b>first</b> time competing at the{' '}
                        <StyledA href="https://www.coupederobotique.fr/">
                            Coupe de Robotique
                        </StyledA>{' '}
                        national competition.
                        <img src={coupeDeRobotiqueLogo}></img>
                        Visit our <StyledLink to="/about">about page</StyledLink> to learn more!
                    </p>

                    <p>
                        But, what about the important part? What will you find on our blog?{' '}
                        <br></br>Here, we will post about <i>various</i> things concerning our club.
                        You can expect to find content about:
                    </p>

                    <ul>
                        <li>
                            🛠️ <b>Mechanics:</b> our robot and its current state; problems we had,
                            how we fixed them, etc...
                        </li>
                        <li>
                            🖥️ <b>Programming:</b> similar things. We will probably post about our
                            code and algorithms the most.
                        </li>
                        <li>
                            <InlineLogo /> <b>Our club</b> in general. For example, at the end of
                            the year, we might write a blog post about how the competition unfolded.
                        </li>
                        <li>
                            🤷 <b>Side projects</b> and other stuff.
                        </li>
                    </ul>
                </Intro>

                {blogPosts.map((blogPost, index) => (
                    <PostSummary blogPost={blogPost} key={index} />
                ))}
            </Page>
        </PageStructure>
    )
}
