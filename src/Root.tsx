import { Outlet, ScrollRestoration } from 'react-router-dom'
import { GlobalStyle } from './styles/commonStyles'
import { DesktopHeader } from './components/DesktopHeader'
import { MobileHeader } from './components/MobileHeader'

export default function Root() {
    return (
        <>
            <GlobalStyle />

            <DesktopHeader />
            <MobileHeader />

            <Outlet />
            <ScrollRestoration />
        </>
    )
}
