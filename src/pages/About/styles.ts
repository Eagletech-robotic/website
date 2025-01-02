import { Link } from 'react-router-dom'
import { borderRadius, breakpoints, colors, fontSizes, lineHeights, mixin } from 'src/styles/commonStyles'
import styled from 'styled-components'

export const StyledAbout = styled.div`
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: auto;

    @media (min-width: ${breakpoints.tablet}) {
        width: 90%;
        gap: 4rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
        width: 80%;
        gap: 5rem;
    }
`

export const TeamPresentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: ${breakpoints.tablet}) {
        gap: 2rem;
    }
`

export const Title = styled.h1`
    font-size: ${fontSizes.mobile.title};
    font-weight: bold;
    text-align: center;
    line-height: ${lineHeights.titleLineHeight};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.title};
    }
`

export const Presentation = styled.p`
    font-size: ${fontSizes.mobile.content};
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`

export const StyledLink = styled(Link)`
    ${mixin.linkStyle}
`

export const Banner = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${borderRadius};
    border: 1px solid ${colors.border};
`

export const MembersPresentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: ${breakpoints.tablet}) {
        gap: 2rem;
    }
`

export const MembersList = styled.div``