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
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    defaultValue={post?.title}
                    required
                />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea id="body" name="body" onChange={handleChange} defaultValue={post?.body} required />
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <select id="status" name="status" onChange={handleChange} defaultValue={post?.status} required>
                    <option value="">Select status</option>
                    <option value="Draft">Draft</option>
                    <option value="Public">Public</option>
                </select>
            </div>
            <button type="submit">{submitText}</button>
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
