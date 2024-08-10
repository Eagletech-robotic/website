import { NavLink, Outlet } from 'react-router-dom'
import './root.css'
import githubLogo from '/images/github-mark.svg'
import { GlobalStyle } from './styles/commonStyles'

export default function Root() {
    return (
        <>
            <GlobalStyle />
            
            <div className="header">
                <NavLink to="about" className="button">
                    🔎 About
                </NavLink>
                <NavLink to="blog" className="button">
                    📝 Blog
                </NavLink>
                <a href="https://github.com/Eagletech-robotic" className="button external">
                    <img src={githubLogo} />
                    Github
                </a>
            </div>

            <Outlet />
        </>
    )
}
