import { colors, borderRadius, fontSizes, breakpoints } from 'src/styles/commonStyles'
import styled from 'styled-components'

const openingTransition = '0.3s ease-in-out'

export const Overview = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    gap: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        gap: 2rem;
    }
`

export const OpenIcon = styled.div<{ $isOpen: boolean }>`
    flex-shrink: 0;
    flex-grow: 0;
    background-image: url('/images/unfold-icon.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 1rem;
    width: 1rem;
    align-self: center;
    transition: transform ease-in-out 0.2s;
    transform: ${(props) => (props.$isOpen ? 'rotate(90deg)' : 'rotate(0)')};

    @media (min-width: ${breakpoints.tablet}) {
        height: 1.5rem;
        width: 1.5rem;
        margin: 1.5rem;
    }
`

export const Description = styled.div<{ $isOpen: boolean }>`
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    transform: ${(props) => (props.$isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    transition: ${openingTransition};
`

export const DescriptionWrapper = styled.div<{ $height: number }>`
    overflow: hidden;
    height: ${(props) => props.$height}px;
    transition: ${openingTransition};
`

export const StyledMemberPresentation = styled.div<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: ${(props) => (props.$isOpen ? '1rem' : 0)};
    width: 100%;
    padding: 1rem;
    border: 2px solid ${colors.border};
    border-left: 5px solid ${colors.primary};
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: ${openingTransition};

    &:nth-child(even) {
        border-left: 5px solid ${colors.primaryYellow};
        & ${Overview} {
            justify-content: end;
            flex-direction: row-reverse;
        }
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 80%;
        margin: 0 auto 2rem auto;
    }
`

export const MemberPhoto = styled.div<{ src: string; $isOpen: boolean }>`
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: ${borderRadius};
    background-color: ${colors.primary};
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    transition: ${openingTransition};

    ${(props) => props.$isOpen && 'width: 6rem; height: 6rem;'}

    @media (min-width: ${breakpoints.tablet}) {
        width: 6rem;
        height: 6rem;

        ${(props) => props.$isOpen && 'width: 8rem; height: 8rem;'}
    }
`

export const Title = styled.div`
    flex-grow: 1;
    align-self: center;
    font-size: ${fontSizes.mobile.content};
    font-weight: bold;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`
