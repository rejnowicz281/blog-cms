import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, deletePostComment, getPost, getPostComments } from "../../../helpers/API";
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
            else navigate("/blog-cms/posts");
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
        <div className="border rounded">
            <PostContents post={post} removePost={removePost} />
            <div className="p-5">
                {comments.length === 0 && <p>No comments found</p>}
                {comments.map((comment) => (
                    <div className="bg-stone-100 p-2 mt-10 border shadow-sm break-words" key={comment._id}>
                        <div className="mb-5 font-light">{comment.body}</div>
                        <div className="text-sm text-neutral-600 font-semibold">{comment.author}</div>
                        <div className="text-sm mb-2">{comment.createdAt}</div>
                        <button
                            className="text-sm font-medium bg-red-400 hover:bg-red-500 transition-colors text-white p-2"
                            onClick={() => removeComment(comment._id)}
                        >
                            Delete Comment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;
