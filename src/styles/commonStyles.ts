import styled, { createGlobalStyle } from 'styled-components'

export const textColor = '#202020'
export const lightTextColor = '#6c6c6c'
export const primaryColor = '#23a7cf'
export const backgroundColor = '#f5f5f5'
export const borderColor = '#eee'

export const contentLineHeight = '1.6'
export const borderRadius = '12px'
export const blogMaxWidth = '700px'

export const hoverTransitionTimingFunction = 'cubic-bezier(0, 0.04, 0, 1.01)'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${backgroundColor};

        color: ${textColor};
        font-family: 'Poppins', 'Roboto', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
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
