import styled from 'styled-components'
import { hoverTransitionTimingFunction } from 'src/styles/commonStyles'

export const MenuIcon = styled.div`
    align-content: center;

    svg {
        height: 100%;
        width: 100%;
        max-height: 28px;
        max-width: 28px;
    }
`

export const Line = styled.rect<{ open: boolean }>`
    transition: 0.3s ${hoverTransitionTimingFunction};
    fill: currentColor;

    &:nth-child(1) {
        transform-origin: 12px 7px;
        transform: ${({ open }) => (open ? 'translateY(6px) rotate(45deg)' : 'none')};
    }

    &:nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
        transform-origin: 12px 19px;
        transform: ${({ open }) => (open ? 'translateY(-6px) rotate(-45deg)' : 'none')};
    }
`
