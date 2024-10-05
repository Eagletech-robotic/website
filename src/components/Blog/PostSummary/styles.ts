import styled from 'styled-components'
import {
    colors,
    borderRadius,
    hoverTransitionTimingFunction,
    fontSizes,
    breakpoints,
    postSummariesGap,
    lineHeights,
    textUnderlineOffset,
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
        border: 3px solid transparent;
        border-radius: ${borderRadius};

        &:hover {
            animation: borderAnimation 0.05s ease forwards;
        }

        @keyframes borderAnimation {
            0% {
                border-top: 3px solid ${colors.primary};
                border-right: 3px solid transparent;
                border-bottom: 3px solid transparent;
                border-left: 3px solid transparent;
            }
            25% {
                border-top: 3px solid ${colors.primary};
                border-right: 3px solid ${colors.primary};
                border-bottom: 3px solid transparent;
                border-left: 3px solid transparent;
            }
            50% {
                border-top: 3px solid ${colors.primary};
                border-right: 3px solid ${colors.primary};
                border-bottom: 3px solid ${colors.primary};
                border-left: 3px solid transparent;
            }
            75% {
                border-top: 3px solid ${colors.primary};
                border-right: 3px solid ${colors.primary};
                border-bottom: 3px solid ${colors.primary};
                border-left: 3px solid ${colors.primary};
            }
            100% {
                border-top: 3px solid ${colors.primary};
                border-right: 3px solid ${colors.primary};
                border-bottom: 3px solid ${colors.primary};
                border-left: 3px solid ${colors.primary};
            }
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
