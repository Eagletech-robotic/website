import { createGlobalStyle } from 'styled-components'

export const textColor = '#202020'
export const lightTextColor = '#6c6c6c'
export const primaryColor = '#23a7cf'
export const backgroundColor = '#f5f5f5'
export const borderColor = '#eee'

export const contentLineHeight = '1.6'
export const borderRadius = '12px'

export const hoverTransitionTimingFunction = 'cubic-bezier(0, 0.04, 0, 1.01)'

export const GlobalStyle = createGlobalStyle`
    :root {
        --light-text-color: #6c6c6c;
        --primary-color: #23a7cf;
        --border-color: #eee;

        --content-line-height: 1.6;
        --border-radius: 12px;

        --hover-transition-timing-function: cubic-bezier(0, 0.04, 0, 1.01);
    }

    body {
        background-color: ${backgroundColor};

        color: ${textColor};
        font-family: 'Poppins', 'Roboto', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    a:visited {
        color: inherit;
    }

    b {
        font-weight: bold;
    }

    i {
        font-style: italic;
    }
`