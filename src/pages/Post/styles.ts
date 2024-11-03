import styled, { css } from 'styled-components'
import {
    colors,
    blogMaxWidth,
    borderRadius,
    breakpoints,
    fontSizes,
    mixin,
    lineHeights,
    hoverTransitionTimingFunction,
} from 'src/styles/commonStyles'
import { Link } from 'react-router-dom'

export const ScrollToTopButton = styled.div`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 1000;

    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: background-color 0.3s ${hoverTransitionTimingFunction};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    @media (min-width: ${breakpoints.tablet}) {
        padding: 0.75rem;
        bottom: 2rem;
        right: 2rem;

        &:hover {
            background-color: ${colors.primaryDarkBlue};
        }

        & > svg {
            width: 1.75rem;
            height: 1.75rem;
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
    position: relative;

    margin-bottom: 2rem;
`

export const LinkBack = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
`

export const Title = styled.h1`
    margin-bottom: 2rem;

    font-weight: bold;
    font-size: ${fontSizes.mobile.title};
    line-height: ${lineHeights.titleLineHeight};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.title};
    }
`

export const Info = styled.div`
    font-size: ${fontSizes.mobile.content};
    display: block;
    color: ${colors.textLight};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`

export const Author = styled.span`
    color: ${colors.text};
`

export const DraftIcon = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;

    @media (min-width: ${breakpoints.tablet}) {
        width: 2rem;
        height: 2rem;
    }
`

export const Separator = styled.hr`
    border: 2px solid ${colors.primary};
    border-radius: ${borderRadius};
    margin-bottom: 3rem;
`

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
        padding: 0.5em;

        @media (min-width: ${breakpoints.tablet}) {
            padding: 1em 0;
        }
    }

    code {
        font-family: 'Fira Code', monospace;
        font-size: ${fontSizes.mobile.small};
        line-height: ${lineHeights.codeLineHeight.mobile};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.small};
            line-height: ${lineHeights.codeLineHeight.desktop};
        }
    }

    [data-code-type='inline'] {
        padding: 0.3em 0.5em;
        border-radius: ${borderRadius};
        background-color: ${colors.codeHighlight};
    }

    [data-code-type='block'] {
        padding: 0.5em 0;
        overflow-x: auto;

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
            background-color: ${colors.codeHighlight};
        }

        [data-highlighted-line] {
            width: 100%;
            background-color: #c8c8ff1a;
        }

        &::-webkit-scrollbar-track {
            margin: ${codeBlockLeftRightPadding};
        }
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
    }
`

export const Content = styled.div`
    font-size: ${fontSizes.mobile.content};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }

    p {
        margin-bottom: 1em;
    }

    h2,
    h3 {
        margin: 1.5em 0 1em;
        font-weight: bold;
        line-height: ${lineHeights.titleLineHeight};
        scroll-margin-top: 1em;

        position: relative;

        & > a.header-anchor {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            font-size: 0;
            color: ${colors.primary};
            text-decoration: none;
            transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;

            @media (min-width: ${breakpoints.tablet}) {
                padding: 1em;
                top: -1em;
                left: -2em;
                bottom: auto;
                right: auto;
                font-size: inherit;
            }
        }

        &:hover > a.header-anchor,
        & > a.header-anchor:hover {
            opacity: 1;
        }
    }

    h2 {
        padding-bottom: 0.5em;
        border-bottom: 2px solid ${colors.border};
        font-size: ${fontSizes.mobile.heading2};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.heading2};
        }
    }

    h3 {
        font-size: ${fontSizes.mobile.heading3};

        @media (min-width: ${breakpoints.tablet}) {
            font-size: ${fontSizes.desktop.heading3};
        }
    }

    h4 {
        font-weight: bold;
        margin: 1em 0 0.5em;
    }

    strong {
        font-weight: bold;
    }

    em {
        font-style: italic;
    }

    ul > li,
    ol > li {
        margin-left: 2.5em;
        margin-bottom: 0.5em;
    }

    ul > li {
        list-style: disc;
    }

    ol > li {
        list-style: decimal;
    }

    img {
        width: 100%;
        border-radius: ${borderRadius};
    }

    blockquote {
        margin: 1em 0;
        padding: 0.5em 1em;

        border-left: 4px solid ${colors.primary};
        border-radius: ${borderRadius};
        background-color: ${colors.highlight};

        :last-child {
            margin-bottom: 0;
        }
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
        overflow-y: hidden; /* Prevent scrollbar appearing for no reason */
        padding-top: 0.5em; /* Prevent top from cliping */
    }

    .table-wrapper {
        overflow-x: auto;
        margin-bottom: 1em;
    }

    table {
        width: 100%;
        border-collapse: separate;
        border-radius: ${borderRadius};
        border: 2px solid ${colors.primary};
        margin-bottom: 0.25em;

        white-space: nowrap;
        overflow: hidden;
    }

    th,
    td {
        padding: 0.5em;
    }

    th {
        background-color: ${colors.primary};
        text-align: center;
        font-weight: bold;
        color: white;
        border-bottom: 2px solid ${colors.border};
    }

    tr:not(:last-child) td {
        border-bottom: 2px solid ${colors.border};
    }

    td:not(:last-child) {
        border-right: 2px solid ${colors.border};
    }

    table tr:hover td {
        background-color: ${colors.highlight};
    }

    ${CodeStyles}
`

export const EndOfPageLinkText = styled.span`
    position: relative;
    color: ${colors.textLight};

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0.05em;
        height: 2px;
        transition: background-color 0.2s ${hoverTransitionTimingFunction};
        background-color: 2px solid transparent;
    }
`

export const EndOfPageLinkToBlog = styled(Link)`
    display: block;
    border-radius: ${borderRadius};
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: white;
    width: 100%;
    text-decoration: none;

    &:hover > ${EndOfPageLinkText}::after {
        background-color: ${colors.textLight};
    }
`
