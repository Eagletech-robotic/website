export default function ImageViewer({ src, alt }: { src: string; alt: string }) {
    return (
        <img
            src={src}
            alt={alt}
            onClick={() => {
                window.open(src, '_blank')
            }}
        />
    )
}
