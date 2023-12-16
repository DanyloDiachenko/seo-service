import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

import Input from "components/UI/Input";
import styles from "./form.module.scss";
import Button from "components/UI/Button";

const LoginForm = (): JSX.Element => {
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
    const [inputes, setInputes] = useState({
        email: "",
        password: "",
    });

    const setPasswordVisibilityHandler = (
        type: "open" | "hide",
    ): (() => void) => {
        if (type === "open") {
            return () => setPasswordVisibility(true);
        }
        if (type === "hide") {
            return () => setPasswordVisibility(false);
        }
        return () => {};
    };

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
                    value={inputes.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInputes({ ...inputes, email: e.target.value })
                    }
                    required
                />
            </label>
            <label htmlFor="password">
                Password
                <div className={styles.passwordInputWrapper}>
                    <input
                        type={passwordVisibility ? "password" : "text"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={inputes.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInputes({
                                ...inputes,
                                password: e.target.value,
                            })
                        }
                        required
                    />
                    {passwordVisibility ? (
                        <Image
                            src="/icons/eye.svg"
                            alt="eye icon"
                            width="22"
                            height="16"
                            onClick={setPasswordVisibilityHandler("hide")}
                        />
                    ) : (
                        <Image
                            src="/icons/no-eye.svg"
                            alt="eye closed icon"
                            width="22"
                            height="21"
                            onClick={setPasswordVisibilityHandler("open")}
                        />
                    )}
                </div>
            </label>
            <Button type="submit" className={styles.continueButton}>
                continue {/* log in */}
            </Button>
        </form>
    );
};

export default LoginForm;
