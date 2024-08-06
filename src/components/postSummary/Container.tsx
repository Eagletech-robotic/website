export default function Container({ children }: { children: React.ReactNode }) {
    return <div style={{ border: '2px solid black', maxHeight: '12rem', overflow: 'hidden' }}>{children}</div>
}
