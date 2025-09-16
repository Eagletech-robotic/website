import { ImgHTMLAttributes } from 'react'

export default function ImageViewer(props: ImgHTMLAttributes<HTMLImageElement>) {
    const { src, alt, ...others } = props

    return <img {...others} src={src} alt={alt} onClick={() => window.open(src, '_blank')} />
}
