import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/blog-cms/posts" end>
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-cms/posts/new" end>
                            New Post
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainLayout;
