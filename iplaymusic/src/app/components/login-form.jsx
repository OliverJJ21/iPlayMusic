'use client';

import { IoIosFingerPrint, IoIosKey } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { redirect } from 'next/navigation'
import { useState } from "react";
import '@/app/login/login.scss';
import Link from "next/link";

export default function Login() {
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username.length > 0 && password.length > 0) {
            redirect("/walkthrough");
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
                <Link className="login-button" href={
                    `https://accounts.spotify.com/authorize?`
                    + `response_type=code`
                    + `&client_id=${process.env.CLIENT_ID}`
                    + `&scope=user-read-private%20user-read-email`
                    + `&redirect_uri=${process.env.CALLBACK_URL}`
                }>Log in</Link>
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
