import { forwardRef } from 'react'
import { Line, MenuIcon } from './burgerIconStyles'

interface BurgerIconProps {
    open: boolean
    onClick: () => void
    className?: string
}

function BurgerIcon({ open, onClick, className }: BurgerIconProps, ref: React.Ref<HTMLDivElement>) {
    return (
        <MenuIcon ref={ref} onClick={onClick} className={className}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Line open={open} x="2" y="6" rx="1.5" ry="1.5" width="20" height="2" />
                <Line open={open} x="2" y="12" rx="1.5" ry="1.5" width="20" height="2" />
                <Line open={open} x="2" y="18" rx="1.5" ry="1.5" width="20" height="2" />
            </svg>
        </MenuIcon>
    )
}

export default forwardRef(BurgerIcon)
