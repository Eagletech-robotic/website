import styled, { css } from 'styled-components'
import {
    colors,
    blogMaxWidth,
    borderRadius,
    breakpoints,
    fontSizes,
    mixin,
    codeLineHeight,
} from '../../styles/commonStyles'

const codeBlockLeftRightPadding = '1.5em'

const CodeStyles = css`
    figure {
        overflow: hidden;
        border-radius: ${borderRadius};
        margin-bottom: 1em;
    }

    [data-rehype-pretty-code-title] {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 1em;

        background-color: ${colors.primary};
        color: white;
        font-weight: bold;

        &::after {
            content: attr(data-language);
            font-weight: normal;
        }
    }

    pre {
        padding: 0.5em 0.5em;

        @media (min-width: ${breakpoints.tablet}) {
            padding: 1em 0;
        }
    }

    [data-code-type='inline'] {
        padding: 0.3em 0.5em;
        border-radius: ${borderRadius};
        background-color: #0b141a0f;
    }

    [data-code-type='block'] {
        padding-bottom: 0.5em;
        overflow-x: auto;

        font-family: 'Fira Code', monospace;
        line-height: ${codeLineHeight.mobile};
        font-size: ${fontSizes.mobile.small};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.content};
            line-height: ${codeLineHeight.desktop};
        }

        &[data-line-numbers] {
            counter-reset: line;
        }

        &[data-line-numbers] > [data-line]::before {
            counter-increment: line;
            content: counter(line);

            display: inline-block;
            width: 0.75rem;
            margin-right: 1.75em;
            text-align: right;
            color: gray;

            @media (min-width: ${breakpoints.tablet}) {
                margin-right: 2.25em;
            }
        }

        [data-line] {
            padding: 0 ${codeBlockLeftRightPadding};
            cursor: text;
        }

        [data-line]:hover {
            background-color: #0001;
        }

        [data-highlighted-chars] {
            border-radius: 0.25em;
            background-color: #aaa5;
        }

        [data-highlighted-line] {
            width: 100%;
            background-color: #c8c8ff1a;
        }

        &::-webkit-scrollbar-track {
            margin: ${codeBlockLeftRightPadding};
        }
    }

    figcaption {
        display: none;
    }

    .rehype-pretty-copy {
        top: 0;
        right: 0;
        margin: 0;
        border: none;
        background-color: transparent;

        padding: 0.5em;
        box-sizing: content-box;
        height: 1.5em;
        width: 1.5em;
        cursor: pointer;

        .ready {
            background-image: url(/images/copy-icon.svg);
        }

        .ready,
        .success {
            background-repeat: no-repeat;
        }
    }
`

export const Page = styled.div`
    padding: 0;
    background-color: white;
    margin: 0 auto;
    max-width: ${blogMaxWidth};

    @media (min-width: ${breakpoints.tablet}) {
        padding: 3rem;
    }
`

export const ErrorInfo = styled.div`
    margin-left: 2rem;
    color: red;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 3rem;
`

export const Title = styled.h1`
    margin-bottom: 1rem;

    font-weight: bold;
    font-size: ${fontSizes.mobile.title};
    line-height: 1.2;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.title};
    }
`

export const Info = styled.div`
    font-size: ${fontSizes.mobile.small};
    display: block;
    text-align: center;
    color: ${colors.textLight};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.small};
    }
`
export const AuthorContainer = styled.div`
    margin-bottom: 0.5rem;

    @media (min-width: ${breakpoints.tablet}) {
        margin-bottom: 1rem;
    }
`

export const Author = styled.div`
    font-style: italic;
`

export const DateText = styled.div`
    font-style: italic;
`

export const Separator = styled.hr`
    border: 2px solid ${colors.primary};
    border-radius: ${borderRadius};
`

export const Content = styled.div`
    font-size: ${fontSizes.mobile.content};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }

    p {
        margin-bottom: 1em;
    }

    h1,
    h2,
    h3 {
        margin: 1.5em 0 1em;
        font-weight: bold;
        line-height: 1.2;
    }

    h1 {
        text-align: center;
        font-size: ${fontSizes.mobile.heading1};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.heading1};
        }

        &:not(:first-child)::before {
            content: '';
            display: block;
            margin: 1em 0;
            height: 2px;
            background-color: #ddd;
        }
    }

    h2 {
        font-size: ${fontSizes.mobile.heading2};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.heading2};
        }
    }

    strong {
        font-weight: bold;
    }

    em {
        font-style: italic;
    }

    ul > li {
        list-style: disc;
        margin-left: 2.5em;
        margin-bottom: 0.5em;
    }

    ol > li {
        list-style: decimal;
        margin-left: 2.5em;
        margin-bottom: 0.5em;
    }

    img {
        width: 100%;

        border-radius: ${borderRadius};
        border: 1px solid ${colors.border};
    }

    a {
        ${mixin.linkStyle}
    }

    hr {
        border: 1px solid ${colors.background};
        border-radius: ${borderRadius};
        margin: 28px 0;
    }

    .katex-display {
        overflow-x: auto;
    }

    ${CodeStyles}
`
