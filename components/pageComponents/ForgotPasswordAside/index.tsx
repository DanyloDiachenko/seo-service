import Link from "next/link";

import styles from "./aside.module.scss";
import GoogleButton from "components/UI/GoogleButton";
import ForgotPasswordForm from './Form';

const ForgotPasswordAside = (): JSX.Element => {
    return (
        <aside className={styles.aside}>
            <h1>Welcome to APP_NAME! 👋🏻</h1>
            <p className={styles.description}>
                Forgot a password? It is not a problem
            </p>
            <GoogleButton className={styles.googleButton} />
            <div className={styles.orWith}>
                <hr />
                <p>or with</p>
                <hr />
            </div>
            <ForgotPasswordForm />
            <p className={styles.loginText}>
                Revised a password? <Link href="/login">Log in</Link>
            </p>
            <p className={styles.agreement}>
                By continuing you agree to our <br />
                <span>Terms of Service</span> &<span>Privacy Policy</span>
            </p>
        </aside>
    );
};

export default ForgotPasswordAside;
