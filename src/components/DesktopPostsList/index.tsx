import PostSummary from '../PostSummary'
import { StyledPostsList, Posts } from './styles'

export default function DesktopPostsList({
    blogPosts,
}: {
    blogPosts: BlogPost[]
}): JSX.Element | null {
    if (blogPosts.length === 0) {
        return null
    }

    return (
        <StyledPostsList>
            <PostSummary blogPost={blogPosts[0]} />
            <Posts>
                {blogPosts.map((blogPost, index) => {
                    if (index === 0) return null
                    else return <PostSummary blogPost={blogPost} key={index} />
                })}
            </Posts>
        </StyledPostsList>
    )
}
