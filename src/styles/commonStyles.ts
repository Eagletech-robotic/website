import styled, { createGlobalStyle, css } from 'styled-components'

export const colors = {
    text: '#202020',
    textLight: '#6c6c6c',
    primary: '#23a7cf',
    background: '#f5f5f5',
    backgroundHeader: '#fcfcfc',
    border: '#eee',
}

export const breakpoints = {
    tablet: '680px',
    desktop: '1024px',
}

export const zIndices = {
    header: 10,
    menuMobile: 20,
}

export const headerHeight = {
    mobile: '4rem',
    desktop: '6rem',
}

export const contentLineHeight = '1.6'
export const borderRadius = '12px'
export const blogMaxWidth = '750px'

export const hoverTransitionTimingFunction = 'cubic-bezier(0, 0.04, 0, 1.01)'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: white;

        color: ${colors.text};
        font-family: 'Poppins', 'Roboto', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;

        @media (min-width: ${breakpoints.tablet}) {
            background-color: ${colors.background}; 
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

export const PageStructure = styled.div`
    line-height: ${contentLineHeight};
    padding: 0 1rem;
    margin-top: 3rem;
`

export const mixin = {
    centerElement: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
}
