import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../../../helpers/API";
import PostContents from "./PostContents";

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
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <div className="border shadow rounded" key={post._id}>
                    <PostContents post={post} removePost={() => removePost(post._id)} />
                </div>
            ))}
        </div>
    );
}

export default Posts;
