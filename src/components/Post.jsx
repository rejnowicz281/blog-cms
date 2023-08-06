import { useParams } from "react-router-dom";
import { getPost } from "../../helpers/API";

function Post() {
    const { id } = useParams();

    console.log(id);
    return (
        <div>
            <button onClick={async () => console.log(await getPost(id))}>Click to console log post</button>
        </div>
    );
}
export default Post;
