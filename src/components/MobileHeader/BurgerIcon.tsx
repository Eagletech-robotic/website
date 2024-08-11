import styled from 'styled-components'

const MenuIcon = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const Line = styled.rect<{ open: boolean }>`
    transition: transform 0.3s ease, opacity 0.3s ease;
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

interface BurgerIconProps {
    open: boolean
    onClick: () => void
    className: string
}

export default function BurgerIcon({ open, onClick, className }: BurgerIconProps) {
    return (
        <MenuIcon onClick={onClick} className={className}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Line open={open} x="2" y="6" rx="1.5" ry="1.5" width="20" height="2" />
                <Line open={open} x="2" y="12" rx="1.5" ry="1.5" width="20" height="2" />
                <Line open={open} x="2" y="18" rx="1.5" ry="1.5" width="20" height="2" />
            </svg>
        </MenuIcon>
    )
}
