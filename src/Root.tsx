import { NavLink, Outlet } from 'react-router-dom'
import './root.css'
import linkOut from '../public/images/link-out.svg'

export default function Root() {
    return (
        <>
            <div className="header">
                <NavLink to="about" className="button">
                    About
                </NavLink>
                <NavLink to="blog" className="button">
                    Blog
                </NavLink>
                <a href="https://github.com/Eagletech-robotic" className="button external">
                    Github
                    <img src={linkOut} />
                </a>
            </div>
            <div style={{ backgroundColor: 'lightblue', overflow: 'hidden' }}>
                <Outlet />
            </div>
        </>
    )
}
