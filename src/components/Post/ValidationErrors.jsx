import PropTypes from "prop-types";

function ValidationErrors({ errors }) {
    return (
        <ul>
            {errors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
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
