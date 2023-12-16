import Link from "next/link";

import styles from "./registerAside.module.scss";
import GoogleButton from "components/UI/GoogleButton";
import RegisterForm from "./Form";

const RegisterAside = (): JSX.Element => {
    return (
        <aside className={styles.aside}>
            <h1>Welcome to APP_NAME! 👋🏻</h1>
            <p className={styles.description}>
                Start gaining free organic traffic <br /> with the simplest SEO
                Rank Tracker <br /> on the market
            </p>
            <GoogleButton className={styles.googleButton} />
            <div className={styles.orWith}>
                <hr />
                <p>or with</p>
                <hr />
            </div>
            <RegisterForm />
            <p className={styles.loginText}>
                Already a member? <Link href="/login">Log in</Link>
            </p>
            <p className={styles.agreement}>
                By continuing you agree to our <br />
                <span>Terms of Service</span> &<span>Privacy Policy</span>
            </p>
        </aside>
    );
};

export default RegisterAside;
