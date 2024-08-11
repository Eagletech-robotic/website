import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './styles/commonStyles'
import { Header } from './components/Header'

export default function Root() {
    return (
        <>
            <GlobalStyle />

            <Header />

            <Outlet />
        </>
    )
}
