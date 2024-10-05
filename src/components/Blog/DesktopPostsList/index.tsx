import PostSummary from '../PostSummary'
import { StyledPostsList } from './styles'

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
            {blogPosts.map((blogPost, index) => {
                return <PostSummary blogPost={blogPost} key={index} />
            })}
        </StyledPostsList>
    )
}
