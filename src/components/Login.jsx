import { useState } from "react";
import { login } from "../../helpers/API";

function Login() {
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await login(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
