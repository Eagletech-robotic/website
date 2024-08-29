---
title: 'The First Post'
date: '2024-08-01'
author: 'idk'
summary: 'The first post ever on this website. Well... yeah. It is not very interesting, but it does test a few features. Just... waiting for more posts to be posted before deleting this one. If you prefer, this is basically just a placeholder? Well, finally arrived at the second line now, can stop writing phew!'
draft: false
---

# Hi!

This is the **first** markdown file _ever_ uploaded as a test!

## Some text

Hey, watch our [Github](https://github.com/Eagletech-robotic/website)!

<div>A div</div>

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

## A plugin and a blockquote!

> Wow, look at that! `remarkGfm` plugin allows you to write links directly!
> www.google.com. **Yeah, that's a blockquote!**
>
> ## haha

## Should be try some math?

Certainly! Here is an inline math: $e^{i\pi} + 1 = 0$.

And here is a block math:

$$
\int_{-\infty}^\infty e^{-x^2} \, dx = \sqrt{\pi}
$$

## Time for some fun with GFM features!

-   [x] Task list
-   [ ] Task list

| Tables        |      Are      |  Cool |
| :------------ | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Let's have fun with images!

![Logo](/images/logo.png)
