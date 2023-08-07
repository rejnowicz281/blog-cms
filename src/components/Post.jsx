import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, deletePostComment, getPost, getPostComments } from "../../helpers/API";
import PostContents from "./PostContents";

function Post() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const res = await getPost(id);

            if (res.status === 200) setPost(res.data);
        }

        async function fetchComments() {
            const res = await getPostComments(id);

            if (res.status === 200) setComments(res.data);
        }

        fetchPost();
        fetchComments();
    }, [id]);

    async function removePost() {
        const res = await deletePost(id);

        if (res.status === 200) navigate("/blog-cms/posts");
    }

    async function removeComment(commentId) {
        const res = await deletePostComment(id, commentId);

        if (res.status === 200) setComments(comments.filter((comment) => comment._id !== commentId));
    }

    if (!post || !comments) return <p>Loading...</p>;

    return (
        <div>
            <PostContents post={post} removePost={removePost} />
            <h2>Comments</h2>
            {comments.length === 0 && <p>No comments found</p>}

            {comments.map((comment) => (
                <div key={comment._id}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <button onClick={() => removeComment(comment._id)}>Delete Comment</button>
                </div>
            ))}
        </div>
    );
}

export default Post;
