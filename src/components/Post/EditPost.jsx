import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";

import { getPost, updatePost } from "../../../helpers/API";
import ValidationErrors from "./ValidationErrors";

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            const res = await getPost(id);

            if (res.status === 200) setPost(res.data);
            else navigate("/blog-cms/posts");
        }

        fetchPost();
    }, [id]);

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    async function handleSubmit() {
        const res = await updatePost(post);

        if (res.status === 200) navigate(`/blog-cms/posts/${id}`);
        else setErrors(res.data.errors);
    }

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>Edit Post</h1>
            <Link to={`/blog-cms/posts/${post._id}`}>Back to Post</Link>
            {errors.length > 0 && <ValidationErrors errors={errors} />}
            <PostForm onSubmit={handleSubmit} submitText="Update Post" post={post} handleChange={handleChange} />
        </div>
    );
}

export default EditPost;
