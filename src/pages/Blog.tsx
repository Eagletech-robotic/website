import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { loadMarkdownFiles } from '../utilities/manageMarkdownFiles'

export default function Blog() {
    let markdowns = loadMarkdownFiles()
    console.log(Date.now())

    return (
        <>
            <h1>Blog Page</h1>
            <h2>Our blogs:</h2>
            <br></br>
            {markdowns.map((markdown, index) => (
                <ul key={index} style={{ border: '2px solid black' }}>
                    <Markdown remarkPlugins={[remarkGfm]}>{markdown.content}</Markdown>
                </ul>
            ))}
        </>
    )
}
