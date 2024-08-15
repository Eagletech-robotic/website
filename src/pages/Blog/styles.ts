import styled from 'styled-components'
import {
    blogMaxWidth,
    borderRadius,
    breakpoints,
    colors,
    fontSizes,
} from '../../styles/commonStyles'
import { InlineLogo } from '../../styles/inlineLogo'

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

    ul li {
        list-style: disc inside;
    }

    img:not(${InlineLogo}) {
        display: block;
        background-color: white;
        padding: 1rem 4rem;
        margin: 0.5rem auto;
        border-radius: ${borderRadius};
        width: 100%;

        @media (min-width: 600px) {
            width: 60%;
        }
    }
`
