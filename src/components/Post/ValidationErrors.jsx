import PropTypes from "prop-types";

function ValidationErrors({ errors }) {
    return (
        <ul>
            {errors.map((error) => (
                <li className="text-red-500 mb-2" key={error.msg}>
                    {error.msg}
                </li>
            ))}
        </ul>
    );
}

ValidationErrors.propTypes = {
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            msg: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ValidationErrors;
