import { AnchorHTMLAttributes } from 'react'

export default function LinkViewer(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
    const { href, children, target, ...others } = props

    const realTarget = target ?? (href?.startsWith('#') ? '_self' : '_blank')

    return (
        <a {...others} href={href} target={realTarget} rel="noopener noreferrer">
            {children}
        </a>
    )
}
