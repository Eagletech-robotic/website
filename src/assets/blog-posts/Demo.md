---
title: 'Post de Demo'
date: '2024-08-01'
author: 'Thibault'
summary: 'Ceci est un post de démo, pour tester et montrer les fonctionnalités de markdown.'
draft: false
---

# Hi!

This is the **first** markdown file _ever_ uploaded as a test!

# Some text

Hey, watch our [Github](https://github.com/Eagletech-robotic/website)!
`This is inline code!`
And,

```tsx title="Code Block!" {2-4} /remark/
// This is a block of tsx code to test and to show off the syntax highlighting!
import * as React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'

export async function Code({ code }: { code: string }) {
    const highlightedCode = await highlightCode(code)
    return (
        <section
            dangerouslySetInnerHTML={{
                __html: highlightedCode,
            }}
        />
    )
}

async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            keepBackground: false,
        })
        .use(rehypeStringify)
        .process(code)

    return String(file)
}
```

1. And
    - a
    - nested
    - list.
2. a
3. list.

# Should be try some math?

Certainly! Here is an inline math: $e^{i\pi} + 1 = 0$.

And here is a block math:

$$
\int_{-\infty}^\infty e^{-x^2} \, dx = \sqrt{\pi}
$$

# Time for some fun with GFM features!

-   [x] Task list
-   [ ] Task list

## Tables

| Tables          |              Are              |    Cool |
| :-------------- | :---------------------------: | ------: |
| col 3 is        | this is centered... in theory |   $1600 |
| col 2 is        |           centered            | **$12** |
| _zebra stripes_ |           are neat            |      $1 |

Pretty cool, right?

~Strikethrough~

# Blockquotes + other stuff

> Wow, look at that! `remarkGfm` plugin also allows you to write links directly!
> www.google.com. **Yeah, that's a blockquote!** 😊
>
> ## haha

# Let's have fun with images!

![Logo](/images/logo.png)
