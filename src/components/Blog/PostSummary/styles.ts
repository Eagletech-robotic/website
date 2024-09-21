import styled from 'styled-components'
import {
    colors,
    borderRadius,
    hoverTransitionTimingFunction,
    fontSizes,
    breakpoints,
    postSummariesGap,
    lineHeights,
} from 'src/styles/commonStyles'
import { Link } from 'react-router-dom'

export const StyledPostSummary = styled(Link)`
    text-decoration: none;
`

export const Container = styled.div`
    margin-bottom: ${postSummariesGap.mobile};
    background-color: white;

    @media (min-width: ${breakpoints.tablet}) {
        padding: 2rem;
        margin-bottom: ${postSummariesGap.desktop};
        break-inside: avoid;
        border: 1px solid ${colors.border};
        border-radius: ${borderRadius};

        transition: 0.3s ${hoverTransitionTimingFunction};

        &:hover {
            transform: scale(1.03);
        }

        &:active {
            transform: scale(0.97);
        }
    }
`

export const ErrorInfo = styled.div`
    color: red;
    margin-left: 2rem;
`

export const Title = styled.h2`
    font-size: ${fontSizes.mobile.content};
    line-height: ${lineHeights.titleLineHeight};
    text-transform: uppercase;
    font-weight: bold;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading2};
        text-transform: initial;
    }
`

export const Summary = styled.div`
    font-size: ${fontSizes.mobile.content};
    color: ${colors.textLight};
    margin: 0.5em 0;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`

export const Footer = styled.div`
    font-size: ${fontSizes.mobile.small};
    color: ${colors.textLight};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.small};
    }
`
