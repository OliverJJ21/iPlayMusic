import { IoIosFingerPrint, IoIosKey } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../style/components/login.scss'
function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username.length > 0 && password.length > 0) {
            navigate("/walkthrough");
        } else {
            setError("Please enter both username and password");
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log In</h1>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Enter your username" />
                    <PiUserCircleFill />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" />
                    <IoIosKey />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">Log in</button>
                <div className="one-touch-login">
                    <a className="one-touch-button">
                        <IoIosFingerPrint />
                    </a>
                    <p>One Touch Login</p>
                </div>
            </form>
        </>
    );
}

export default Login;