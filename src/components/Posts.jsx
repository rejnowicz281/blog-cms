import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../helpers/API";

function Posts() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            const res = await getPosts();

            if (res.status === 200) setPosts(res.data);
        }

        fetchPosts();
    }, []);

    async function removePost(id) {
        const res = await deletePost(id);

        if (res.status === 200) setPosts(posts.filter((post) => post._id !== id));
    }

    if (!posts) return <p>Loading...</p>;

    return (
        <div>
            <h1>Posts</h1>
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <div key={post._id}>
                    <hr />
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div>
                        <Link to={`/blog-cms/posts/${post._id}`}>View Post</Link>
                    </div>
                    <div>
                        <Link to={`/blog-cms/posts/${post._id}/edit`}>Edit Post</Link>
                    </div>
                    <div>
                        <button onClick={() => removePost(post._id)}>Delete Post</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
