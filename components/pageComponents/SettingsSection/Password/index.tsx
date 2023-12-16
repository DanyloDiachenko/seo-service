import Image from "next/image";
import { useState } from "react";

import styles from "./password.module.scss";
import Button from "components/UI/Button";

const Password = (): JSX.Element => {
    const [passwordsVisibility, setPasswordsVisibility] = useState({
        current: false,
        new: false,
        repeatNew: false,
    });

    const setPasswordVisibilityHandler = (
        type: "current" | "new" | "repeatNew",
        value: boolean,
    ): (() => void) => {
        return () => {
            setPasswordsVisibility((prevState) => ({
                ...prevState,
                [type]: value,
            }));
        };
    };

    return (
        <form name="login" className={styles.password}>
            <div className={styles.title}>Your Password</div>
            <label htmlFor="currentPassword">
                <div className={styles.passwordInputWrapper}>
                    <input
                        type={passwordsVisibility.current ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        placeholder="Current password*"
                    />
                    {!passwordsVisibility.current ? (
                        <Image
                            src="/icons/eye.svg"
                            alt="eye icon"
                            width="22"
                            height="16"
                            onClick={setPasswordVisibilityHandler(
                                "current",
                                true,
                            )}
                        />
                    ) : (
                        <Image
                            src="/icons/no-eye.svg"
                            alt="eye closed icon"
                            width="22"
                            height="21"
                            onClick={setPasswordVisibilityHandler(
                                "current",
                                false,
                            )}
                        />
                    )}
                </div>
            </label>
            <label htmlFor="newPassord">
                <div className={styles.passwordInputWrapper}>
                    <input
                        type={passwordsVisibility.new ? "text" : "password"}
                        id="newPassord"
                        name="newPassord"
                        placeholder="New password*"
                    />
                    {!passwordsVisibility.new ? (
                        <Image
                            src="/icons/eye.svg"
                            alt="eye icon"
                            width="22"
                            height="16"
                            onClick={setPasswordVisibilityHandler("new", true)}
                        />
                    ) : (
                        <Image
                            src="/icons/no-eye.svg"
                            alt="eye closed icon"
                            width="22"
                            height="21"
                            onClick={setPasswordVisibilityHandler("new", false)}
                        />
                    )}
                </div>
            </label>
            <label htmlFor="repeatNew">
                <div className={styles.passwordInputWrapper}>
                    <input
                        type={
                            passwordsVisibility.repeatNew ? "text" : "password"
                        }
                        id="repeatNew"
                        name="repeatNew"
                        placeholder="Repeat new password*"
                    />
                    {!passwordsVisibility.repeatNew ? (
                        <Image
                            src="/icons/eye.svg"
                            alt="eye icon"
                            width="22"
                            height="16"
                            onClick={setPasswordVisibilityHandler(
                                "repeatNew",
                                true,
                            )}
                        />
                    ) : (
                        <Image
                            src="/icons/no-eye.svg"
                            alt="eye closed icon"
                            width="22"
                            height="21"
                            onClick={setPasswordVisibilityHandler(
                                "repeatNew",
                                false,
                            )}
                        />
                    )}
                </div>
            </label>
            <div className={styles.buttonWrapper}>
                <Button type="submit">Save</Button>
            </div>
        </form>
    );
};

export default Password;
