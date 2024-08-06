import { NavLink } from 'react-router-dom'
import PostSummary from '../components/postSummary'
import { useBlogPosts } from '../utils/posts'
import './blog.css'
import coupeDeRobotiqueLogo from '/images/CDR-logo.jpg'
import eagleTechLogo from '/favicon.ico'

export default function Blog() {
    const blogPosts = useBlogPosts()

    blogPosts.sort((a: BlogPost, b: BlogPost) => {
        const dateA = a.post.data.matter?.date || '1970-01-01'
        const dateB = b.post.data.matter?.date || '1970-01-01'
        return dateA < dateB ? 1 : -1
    })

    return (
        <div className="blog">
            <h1 className="title">The EagleTech Blog 🔥</h1>
            <div className="intro">
                <span>Hi. This is our blog page 📖.</span>
                <span>
                    As you may have seen, we are a new robotics club based in south of France. The 2024-25 season will
                    be our <b>first</b> time competing at the{' '}
                    <a href="https://www.coupederobotique.fr/" className="cdr-logo">
                        Coupe de Robotique
                    </a>{' '}
                    national competition.
                    <img src={coupeDeRobotiqueLogo}></img>
                    Visit our <NavLink to="/about">about page</NavLink> to learn more!
                </span>
                <span>
                    But, what about the important part? What will you find on our blog? <br></br>Here, we will post
                    about <i>various</i> things concerning our club. You can expect to find content about:
                    <ul>
                        <li>
                            🛠️ <b>Mechanics:</b> our robot and its current state; problems we had, how we fixed them,
                            etc...
                        </li>
                        <li>
                            🖥️ <b>Programming:</b> similar things. We will probably post about our code and algorithms
                            the most.
                        </li>
                        <li>
                            <img src={eagleTechLogo} className="inline" /> <b>Our club</b> in general. For example, at
                            the end of the year, we might write a blog post about how the competition unfolded.
                        </li>
                        <li>
                            🤷 <b>Side projects</b> and other stuff.
                        </li>
                    </ul>
                </span>
            </div>

            {blogPosts.map((blogPost, index) => (
                <PostSummary blogPost={blogPost} key={index} />
            ))}
        </div>
    )
}
