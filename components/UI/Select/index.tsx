import Image from "next/image";
import { KeyboardEvent, useState } from "react";

import styles from "./select.module.scss";
import SelectProps from "./select.props";
import IVariant from "./select.interface";

const Select = ({
    variants,
    setActiveVariant,
    className,
    activeVariant,
}: SelectProps): JSX.Element => {
    const [isVariantsOpen, setIsVariantsOpen] = useState<boolean>(false);

    const setIsVariantsOpenHandler = (): void => {
        setIsVariantsOpen(!isVariantsOpen);
    };
    const setActiveVariantHandler = (variant: IVariant): void => {
        setActiveVariant(variant);
    };

    const setIsVariantsOpenKeyboardHandler = (e: KeyboardEvent): void => {
        if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault();
            setIsVariantsOpenHandler();
        }
    };

    const setActiveVariantKeyboardHandler = (
        variant: IVariant,
        e: KeyboardEvent,
    ): void => {
        if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault();
            setActiveVariantHandler(variant);
        }
    };

    return (
        <>
            <div
                onClick={setIsVariantsOpenHandler}
                className={styles.select}
                tabIndex={0}
                onKeyDown={setIsVariantsOpenKeyboardHandler}
            >
                <span className={styles.iconTitle}>
                    <Image
                        src={activeVariant.imgSrc}
                        alt={activeVariant.title + "icon"}
                        width="16"
                        height="12"
                    />
                    <span className={styles.title}>{activeVariant.title}</span>
                </span>
                <Image
                    src="/icons/arrow-bottom.svg"
                    alt="arrow icon"
                    width="8"
                    height="6"
                    className={`${styles.arrow} ${
                        isVariantsOpen ? styles.arrowActive : ""
                    }`}
                />
            </div>

            <div
                className={`${styles.variants} ${className} ${
                    isVariantsOpen ? styles.active : ""
                }`}
            >
                {variants.map((variant) => (
                    <div
                        onClick={() => setActiveVariantHandler(variant)}
                        className={styles.variant}
                        key={variant.title}
                        tabIndex={isVariantsOpen ? 0 : -1}
                        onKeyDown={(e) =>
                            setActiveVariantKeyboardHandler(variant, e)
                        }
                    >
                        <Image
                            src={variant.imgSrc}
                            alt={variant.title + "icon"}
                            width="16"
                            height="12"
                        />
                        <span className={styles.title}>{variant.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Select;
