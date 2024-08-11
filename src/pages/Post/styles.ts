import styled from 'styled-components'
import {
    backgroundColor,
    blogMaxWidth,
    borderColor,
    borderRadius,
    breakpoints,
    lightTextColor,
    primaryColor,
    textColor,
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
    text-align: center;

    margin-bottom: 3rem;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.2;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 3rem;
    }
`

export const Info = styled.div`
    display: block;
    color: ${lightTextColor};
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
    border: 2px solid ${primaryColor};
    border-radius: ${borderRadius};
`

export const Content = styled.div`
    font-size: 18px;

    p {
        margin-bottom: 1rem;
    }

    h1,
    h2,
    h3 {
        margin: 1.2em 0 0.8em;
        font-weight: bold;
        line-height: 1.2;
    }

    h1 {
        font-size: 2rem;

        &:not(:first-child)::before {
            content: '';
            display: block;
            margin: 1.5rem 0;
            height: 2px;
            background-color: #ddd;
        }
    }

    h2 {
        font-size: 1.5rem;
    }

    strong {
        font-weight: bold;
    }

    em {
        font-style: italic;
    }

    ul {
        margin-bottom: 1rem;
    }

    ul > li {
        list-style: disc;
        margin-left: 1.15em;
        margin-bottom: 0.35rem;
    }

    ol > li {
        list-style: decimal;
        margin-left: 1.15em;
        margin-bottom: 0.35rem;
    }

    img {
        width: 100%;

        border-radius: ${borderRadius};
        border: 1px solid ${borderColor};
    }

    a {
        color: ${lightTextColor};
        text-underline-offset: 4px;

        transition: 100ms cubic-bezier(0.68, 0.04, 0.65, 0.98);

        &:hover {
            color: ${textColor};
        }
    }

    hr {
        border: 1px solid ${backgroundColor};
        border-radius: ${borderRadius};
        margin: 28px 0;
    }
`
