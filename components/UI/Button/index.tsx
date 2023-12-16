import ButtonProps from "./button.props";
import styles from "./button.module.scss";

const Button = ({
    className,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
