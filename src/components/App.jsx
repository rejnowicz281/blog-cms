import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Post from "./Post";
import Posts from "./Posts";

function App() {
    return (
        <HashRouter>
            <Routes>
                {localStorage.getItem("token") ? (
                    <>
                        <Route path="/*" element={<Navigate to="/blog-cms/posts" />} />
                        <Route path="/blog-cms/posts" element={<Posts />} />
                        <Route path="/blog-cms/posts/:id" element={<Post />} />
                    </>
                ) : (
                    <>
                        <Route path="/*" element={<Navigate to="/blog-cms/login" />} />
                        <Route path="/blog-cms/login" element={<Login />} />
                    </>
                )}
            </Routes>
        </HashRouter>
    );
}

export default App;
