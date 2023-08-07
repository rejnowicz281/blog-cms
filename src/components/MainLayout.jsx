import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/blog-cms/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainLayout;
