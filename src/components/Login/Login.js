import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "123") {
            onLogin(username);
        } else {
            setError("Hatalı şifre!");
        }
    };

    return (
        <div className="Login">
            <div className="LoginContainer">
                <h2>Log AI</h2>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Şifre</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit">Giriş Yap</button>
                        <button type="signup">Sign Up</button>
                    </div>
                    <div className={`error ${error ? "show" : ""}`}>
                        {error}
                    </div>
                    <button className="forgot-password">
                        Şifrenizi mi unuttunuz?
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
