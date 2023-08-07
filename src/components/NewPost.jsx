import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../helpers/API";
import PostForm from "./PostForm";

function NewPost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        body: "",
        status: "",
    });

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    async function handleSubmit() {
        const res = await createPost(post);

        if (res.status === 200) navigate("/blog-cms/posts");
        else console.log(res);
    }

    return (
        <div>
            <h1>New Post</h1>
            <PostForm onSubmit={handleSubmit} submitText="Create Post" post={post} handleChange={handleChange} />
        </div>
    );
}

export default NewPost;
