import styled from 'styled-components'
import { blogMaxWidth, breakpoints, colors, fontSizes } from 'src/styles/commonStyles'

export const Page = styled.div`
    margin: 0 auto;
    max-width: ${blogMaxWidth};
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`

export const Intro = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem 0 2rem;
    color: ${colors.textLight};
    font-size: ${fontSizes.mobile.content};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }

    p {
        margin-bottom: 1rem;
    }
`
