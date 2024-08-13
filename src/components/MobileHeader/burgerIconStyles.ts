import styled from 'styled-components'
import { hoverTransitionTimingFunction } from '../../styles/commonStyles'

export const MenuIcon = styled.div`
    align-content: center;
    cursor: pointer;
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
