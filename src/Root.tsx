import { Outlet } from 'react-router-dom'
import githubLogo from '/images/github-mark.svg'
import { GlobalStyle } from './styles/commonStyles'
import { ExternalLinkButton, Header, NavLinkButton } from './rootStyles'

export default function Root() {
    return (
        <>
            <GlobalStyle />

            <Header>
                <NavLinkButton to="about">🔎 About</NavLinkButton>
                <NavLinkButton to="blog">📝 Blog</NavLinkButton>
                <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                    <img src={githubLogo} />
                    Github
                </ExternalLinkButton>
            </Header>

            <Outlet />
        </>
    )
}
