import styled from 'styled-components'
import {
    colors,
    blogMaxWidth,
    borderRadius,
    breakpoints,
    fontSizes,
    mixin,
} from '../../styles/commonStyles'

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
    margin: 1rem 0;
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
`