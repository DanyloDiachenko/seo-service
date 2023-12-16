import Image from "next/image";

import GoogleButtonProps from "./googleButton.props";
import styles from "./googleButton.module.scss";

const GoogleButton = ({
    className = "",
    ...props
}: GoogleButtonProps): JSX.Element => {
    return (
        <button className={`${styles.googleButton} ${className}`} {...props}>
            <Image
                src="/icons/google.svg"
                alt="google icon"
                width="15"
                height="14"
            />
            <span>continue with google</span>
        </button>
    );
};

export default GoogleButton;
