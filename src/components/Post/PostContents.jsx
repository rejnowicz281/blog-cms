import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostContents({ post, removePost }) {
    return (
        <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>Status: {post.status}</p>
            <div>
                <Link to={`/blog-cms/posts/${post._id}`}>View Post</Link>
            </div>
            <div>
                <Link to={`/blog-cms/posts/${post._id}/edit`}>Edit Post</Link>
            </div>
            <div>
                <button onClick={removePost}>Delete Post</button>
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
