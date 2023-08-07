import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Post from "./Post";
import Posts from "./Posts";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [tokenChecked, setTokenChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                localStorage.removeItem("token");
                setAuthenticated(false);
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
                        <>
                            <Route path="/*" element={<Navigate to="/blog-cms/posts" />} />
                            <Route path="/blog-cms/posts" element={<Posts />} />
                            <Route path="/blog-cms/posts/:id" element={<Post />} />
                        </>
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
