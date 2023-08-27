import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import MainLayout from "./Layout/MainLayout";
import EditPost from "./Post/EditPost";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";
import Posts from "./Post/Posts";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [tokenChecked, setTokenChecked] = useState(false);

    function logOut() {
        localStorage.removeItem("token");
        setAuthenticated(false);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                logOut();
            } else {
                setAuthenticated(true);
            }
        }
        setTokenChecked(true);
    }, []);

    if (tokenChecked) {
        return (
            <HashRouter>
                <Routes>
                    {authenticated ? (
                        <Route element={<MainLayout logOut={logOut} />}>
                            <Route path="/*" element={<Navigate to="/blog-cms/posts" />} />
                            <Route path="/blog-cms/posts" element={<Posts />} />
                            <Route path="/blog-cms/posts/:id" element={<Post />} />
                            <Route path="/blog-cms/posts/new" element={<NewPost />} />
                            <Route path="/blog-cms/posts/:id/edit" element={<EditPost />} />
                        </Route>
                    ) : (
                        <>
                            <Route path="/*" element={<Navigate to="/blog-cms/login" />} />
                            <Route path="/blog-cms/login" element={<Login setAuthenticated={setAuthenticated} />} />
                        </>
                    )}
                </Routes>
            </HashRouter>
        );
    }
}

export default App;
