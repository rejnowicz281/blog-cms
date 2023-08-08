import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostContents({ post, removePost }) {
    return (
        <div key={post._id}>
            <div
                className={`${
                    post.status == "Draft" ? "bg-red-500 text-white" : "bg-green-400"
                } font-medium text-center uppercase text-2xl p-2 rounded-tl rounded-tr pointer-events-none`}
            >
                {post.status}
            </div>
            <div className="p-5 break-words">
                <div className="font-medium text-4xl mb-5">{post.title}</div>
                <div className="border-b font-light pb-5">{post.body}</div>
                <div className="mt-2">
                    <Link className="hover:text-neutral-500 transition-colors" to={`/blog-cms/posts/${post._id}`}>
                        View Post
                    </Link>
                </div>
                <div className="mt-2">
                    <Link className="hover:text-neutral-500 transition-colors" to={`/blog-cms/posts/${post._id}/edit`}>
                        Edit Post
                    </Link>
                </div>
                <button
                    className="border p-2 bg-red-400 hover:bg-red-500 transition-colors text-white rounded mt-6"
                    onClick={removePost}
                >
                    Delete Post
                </button>
            </div>
        </div>
    );
}

PostContents.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired,
    removePost: PropTypes.func.isRequired,
};

export default PostContents;
