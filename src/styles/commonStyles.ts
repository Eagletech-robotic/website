import { Link } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'

export const colors = {
    text: '#202020',
    textLight: '#6c6c6c',
    primary: '#23a7cf',
    background: '#f5f5f5',
    backgroundHeader: '#fcfcfc',
    border: '#eee',
    highlight: '#aaa1',
    codeHighlight: '#aaa7',
}

export const breakpoints = {
    tablet: '680px',
    desktop: '1024px',
}

export const zIndices = {
    headerContainer: 20,
    contentCover: 25,
    menuMobile: 30,
    header: 35,
}

export const headerHeight = {
    mobile: '4rem',
    desktop: '5rem',
}

export const fontSizes = {
    desktop: {
        title: '3.5rem',
        heading1: '2.5rem',
        heading2: '1.75rem',
        heading3: '1.4rem',
        content: '1.125rem',
        small: '0.9rem',
    },
    mobile: {
        title: '2.25rem',
        heading1: '1.9rem',
        heading2: '1.5rem',
        heading3: '1.25rem',
        content: '1rem',
        small: '0.88rem',
    },
}

export const postSummariesGap = {
    desktop: '2rem',
    mobile: '1rem',
}

export const lineHeights = {
    contentLineHeight: '1.6',
    codeLineHeight: {
        desktop: '1.7',
        mobile: '1.5',
    },
    titleLineHeight: '1.2',
}

export const borderRadius = '12px'
export const blogMaxWidth = '750px'

export const hoverTransitionTimingFunction = 'cubic-bezier(0.25, 0.8, 0.24, 1)'
export const headerShadow = '0px 0px 15px 0px black'

const styles = css`
    body {
        overflow-y: scroll;
        background-color: white;

        color: ${colors.text};
        font-family: 'Poppins', 'Roboto', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: ${fontSizes.mobile.content};
        word-break: break-word;

        @media (min-width: ${breakpoints.tablet}) {
            background-color: ${colors.background};
            font-size: ${fontSizes.desktop.content};
        }
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: #888;

        &:hover {
            background-color: #555;
        }
    }

    a {
        color: inherit;
    }

    b {
        font-weight: bold;
    }

    i {
        font-style: italic;
    }
`

export const GlobalStyle = createGlobalStyle`${styles}`

export const mixin = {
    centerElement: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    linkStyle: css`
        color: ${colors.textLight};
        text-decoration: underline;
        text-underline-offset: 4px;
        transition: 0.2s ${hoverTransitionTimingFunction};

        &:hover {
            color: ${colors.text};
        }
    `,
}

export const PageStructure = styled.div`
    line-height: ${lineHeights.contentLineHeight};
    padding: 0 1rem;
    margin-top: 3rem;
`

export const StyledLink = styled(Link)`
    ${mixin.linkStyle}
`

export const StyledA = styled.a`
    ${mixin.linkStyle}
`
