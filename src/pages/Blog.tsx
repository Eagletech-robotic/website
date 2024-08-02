import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

import { loadMarkdownFiles } from '../utilities/manageMarkdownFiles'

export default function Blog() {
    let markdowns = loadMarkdownFiles()

    return (
        <>
            <h1>Blog Page</h1>
            <h2>Our blogs:</h2>
            <br></br>
            {markdowns.map((markdown, index) => (
                <ul key={index} style={{ border: '2px solid black' }}>
                    <Markdown
                        remarkPlugins={[remarkGfm, remarkNormalizeHeadings, remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    >
                        {markdown.content}
                    </Markdown>
                </ul>
            ))}
        </>
    )
}
