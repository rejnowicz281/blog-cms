import PropTypes from "prop-types";

function PostForm({ onSubmit, submitText = "Submit", post, handleChange }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    className="w-full border rounded p-2 text-lg outline-none"
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    defaultValue={post?.title}
                />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="body">Body</label>
                <textarea
                    className="w-full border rounded p-2 text-lg outline-none"
                    id="body"
                    name="body"
                    onChange={handleChange}
                    defaultValue={post?.body}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="status">Status</label>
                <select
                    className="ms-3 p-2 rounded-lg shadow cursor-pointer bg-green-100"
                    id="status"
                    name="status"
                    onChange={handleChange}
                    defaultValue={post?.status}
                >
                    <option value="">Select status</option>
                    <option value="Draft">Draft</option>
                    <option value="Public">Public</option>
                </select>
            </div>
            <button className="w-full bg-green-200 p-3 hover:bg-green-300 transition-colors" type="submit">
                {submitText}
            </button>
        </form>
    );
}

PostForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
        status: PropTypes.string,
    }),
};

export default PostForm;
