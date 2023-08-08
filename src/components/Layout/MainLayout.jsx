import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout({ logOut }) {
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
                    <li>
                        <button onClick={logOut}>Log Out</button>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

MainLayout.propTypes = {
    logOut: PropTypes.func.isRequired,
};

export default MainLayout;
