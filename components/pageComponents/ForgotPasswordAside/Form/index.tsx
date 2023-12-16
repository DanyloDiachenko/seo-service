import { ChangeEvent, FormEvent, useState } from "react";

import Input from "components/UI/Input";
import styles from "./form.module.scss";
import Button from "components/UI/Button";

const ForgotPasswordForm = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("");

    const submitHandler = (event: FormEvent): void => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} name="login" className={styles.form}>
            <label htmlFor="email">
                E-mail
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={inputValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
                    required
                />
            </label>
            <Button type="submit" className={styles.continueButton}>
                continue
            </Button>
        </form>
    );
};

export default ForgotPasswordForm;
