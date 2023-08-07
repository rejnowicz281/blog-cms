import PropTypes from "prop-types";
import { useState } from "react";
import { login } from "../../helpers/API";

function Login({ setAuthenticated }) {
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await login(password);

        const token = res.data.token;

        if (res.status === 200 && token) {
            localStorage.setItem("token", token);
            setAuthenticated(true);
        } else {
            setError(res.data.error.message);
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

Login.propTypes = {
    setAuthenticated: PropTypes.func.isRequired,
};

export default Login;
