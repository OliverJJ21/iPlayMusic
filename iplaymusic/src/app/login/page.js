import Login from "../components/login-form";
import CookieLoginLink from "../components/cookieloginlink";

export default function LoginPage() {
    return (
        <>
            <Login children={<CookieLoginLink/>} />
        </>
    );
}