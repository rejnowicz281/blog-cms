import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout({ logOut }) {
    return (
        <div className="text-xl text-stone-800 lg:p-24 p-12">
            <nav>
                <div>
                    <NavLink className="hover:text-stone-400 transition-colors" to="/blog-cms/posts" end>
                        Posts
                    </NavLink>
                </div>

                <div className="pt-1">
                    <NavLink className="hover:text-stone-400 transition-colors" to="/blog-cms/posts/new" end>
                        New Post
                    </NavLink>
                </div>

                <button className="hover:text-stone-400 transition-colors pt-1" onClick={logOut}>
                    Log Out
                </button>
            </nav>
            <div className="mt-10">
                <Outlet />
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    logOut: PropTypes.func.isRequired,
};

export default MainLayout;
