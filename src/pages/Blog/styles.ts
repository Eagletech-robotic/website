import styled from 'styled-components'
import { borderRadius, contentLineHeight, lightTextColor } from '../../styles/commonStyles'

export const StyledBlog = styled.div`
    line-height: ${contentLineHeight};
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
    margin-top: 3rem;
    max-width: 700px;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`

export const InlineImage = styled.img`
    height: 1rem;
    width: auto;
    vertical-align: middle;
`

export const Intro = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem 0 2rem;
    color: ${lightTextColor};
    font-size: 1rem;

    p {
        margin-bottom: 1rem;
    }

    ul li {
        list-style: disc inside;
    }

    img:not(${InlineImage}) {
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