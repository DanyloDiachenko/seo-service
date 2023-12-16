import Image from "next/image";

import styles from "./registerLoginSection.module.scss";

const RegisterLoginSection = (): JSX.Element => {
    return (
        <div className={styles.registerLogin}>
            {/* circles -background */}
            <div className={`${styles.circle} ${styles.circleTopCenter}`}></div>
            <div
                className={`${styles.circle} ${styles.circleBottomRight}`}
            ></div>
            <div className={`${styles.circle} ${styles.circleTopRight}`}></div>
            <div
                className={`${styles.circle} ${styles.circleBottomLeft}`}
            ></div>
            <div className={`${styles.circle} ${styles.circleTopLeft}`}></div>
            <div className={styles.logo}>LOGO</div>
            <Image
                src="/banners/welcome.webp"
                alt="welcome photo"
                width={848}
                height={736}
                quality={100}
                className={styles.banner}
            />
        </div>
    );
};

export default RegisterLoginSection;
