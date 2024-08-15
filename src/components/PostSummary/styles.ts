import styled from 'styled-components'
import {
    colors,
    borderRadius,
    hoverTransitionTimingFunction,
    fontSizes,
    breakpoints,
} from '../../styles/commonStyles'
import { Link } from 'react-router-dom'

export const StyledPostSummary = styled(Link)`
    text-decoration: none;
`

export const Container = styled.div`
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    background-color: white;
    border: 1px solid ${colors.border};
    border-radius: ${borderRadius};

    transition: 0.3s ${hoverTransitionTimingFunction};

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

export const ErrorInfo = styled.div`
    color: red;
    margin-left: 2rem;
`

export const Title = styled.h2`
    font-size: ${fontSizes.mobile.heading2};
    font-weight: bold;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading2};
    }
`

export const Summary = styled.div`
    font-size: ${fontSizes.mobile.content};
    color: ${colors.text};
    margin: 8px 0;

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
