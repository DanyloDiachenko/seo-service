import InputProps from "./input.props";
import styles from "./input.module.scss";

const Input = ({ className = "", ...props }: InputProps): JSX.Element => {
    return <input className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
