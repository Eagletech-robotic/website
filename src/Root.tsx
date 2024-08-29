import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './styles/commonStyles'
import { DesktopHeader } from './components/DesktopHeader'
import { MobileHeader } from './components/MobileHeader'
import ScrollToTop from './components/ScrollToTop'

export default function Root() {
    return (
        <>
            <GlobalStyle />
            
            <DesktopHeader />
            <MobileHeader />

            <Outlet />
            <ScrollToTop />
        </>
    )
}
