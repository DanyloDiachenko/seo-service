import Link from "next/link";

import styles from "./loginAside.module.scss";
import GoogleButton from "components/UI/GoogleButton";
import LoginForm from "./Form";

const LoginAside = (): JSX.Element => {
    return (
        <aside className={styles.aside}>
            <h1>Welcome to APP_NAME! 👋🏻</h1>
            <p className={styles.description}>Glad to see you again!</p>
            <GoogleButton className={styles.googleButton} />
            <div className={styles.orWith}>
                <hr />
                <p>or with</p>
                <hr />
            </div>
            <LoginForm />
            <p className={styles.loginText}>
                Forgot a password? <Link href="/forgot-password">Reset</Link>
            </p>
            <p className={styles.agreement}>
                By continuing you agree to our <br />
                <span>Terms of Service</span> &<span>Privacy Policy</span>
            </p>
        </aside>
    );
};

export default LoginAside;
