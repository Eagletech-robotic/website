import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Blog() {
    const markdownSentences1 = [
        '# Hi!',
        'This is the **first** markdown file *ever* uploaded as a test!',
        'Hey, watch our [Github](https://github.com/Eagletech-robotic/website)!',
        '`This is inline code!`',
        'And \n```\nthis is a block of code.\n```',
        '1. And\n   - a\n   - nested\n    - list.\n2. a\n3. list.',
    ]
    const markdown1 = markdownSentences1.join('\n')

    const markdownSentences2 = [
        'Wow, look at that! remarkGfm plugin allows you to write links directly!',
        'www.google.com',
    ]
    const markdown2 = markdownSentences2.join('\n')

    return (
        <>
            <h1>Blog Page</h1>
            <h2>Our blogs:</h2>
            <br></br>
            <div style={{ border: '2px solid black' }}>
                <Markdown>{markdown1}</Markdown>
                <Markdown remarkPlugins={[remarkGfm]}>{markdown2}</Markdown>
            </div>
        </>
    )
}
