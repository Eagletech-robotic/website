import PostSummary from '../PostSummary'
import { Divider, StyledPostsList } from './styles'

export default function MobilePostsList({
    blogPosts,
}: {
    blogPosts: BlogPost[]
}): JSX.Element | null {
    if (blogPosts.length === 0) {
        return null
    }

    return (
        <StyledPostsList>
            {blogPosts.map((blogPost, index) => (
                <div key={index}>
                    <Divider />
                    <PostSummary blogPost={blogPost} />
                </div>
            ))}
        </StyledPostsList>
    )
}
