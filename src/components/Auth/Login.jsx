import PropTypes from "prop-types";
import { useState } from "react";
import { login } from "../../../helpers/API";

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
        <div className="flex text-lg justify-center h-screen items-center text-stone-600 flex-col">
            {error && <span className="text-red-600">{error}</span>}
            <form onSubmit={handleSubmit} className="text-center">
                <input
                    className="text-black text-center border w-full p-2 mt-2 mb-2 rounded-sm"
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Type in password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-slate-500 hover:bg-slate-600 transition-colors text-slate-200 w-full rounded-sm p-3"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

Login.propTypes = {
    setAuthenticated: PropTypes.func.isRequired,
};

export default Login;
