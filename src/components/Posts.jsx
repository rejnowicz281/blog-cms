import { getPosts } from "../../helpers/API";

function Posts() {
    return (
        <div>
            <button onClick={async () => console.log(await getPosts())}>Click to console log posts</button>
        </div>
    );
}

export default Posts;
