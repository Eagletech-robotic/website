import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <div style={{ backgroundColor: 'yellow' }}>
                <NavLink to="about">About </NavLink>
                <NavLink to="blog">Blog</NavLink>
            </div>
            <div style={{ backgroundColor: 'lightblue' }}>
                <Outlet />
            </div>
        </>
    )
}
