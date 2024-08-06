import { NavLink, Outlet } from 'react-router-dom'
import './root.css'

export default function Root() {
    return (
        <>
            <div className="header">
                <NavLink to="about" className="button">
                    <span>About</span>
                </NavLink>
                <NavLink to="blog" className="button">
                    <span>Blog</span>
                </NavLink>
                <a href="https://github.com/Eagletech-robotic" className="button external">
                    <span>Github</span>
                </a>
            </div>
            <div style={{ backgroundColor: 'lightblue', overflow: 'hidden' }}>
                <Outlet />
            </div>
        </>
    )
}
