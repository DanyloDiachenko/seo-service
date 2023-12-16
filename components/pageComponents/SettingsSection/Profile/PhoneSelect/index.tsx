import { useState } from "react";
import IVariant from "components/UI/Select/select.interface";
import styles from "./select.module.scss";
import Select from "components/UI/Select";

const PhoneSelect = (): JSX.Element => {
    const variants: IVariant[] = [
        {
            title: "+380 (99) 999-99-99",
            imgSrc: "/icons/ukraine.svg",
        },
        {
            title: "+1 (999) 999-9999",
            imgSrc: "/icons/usa.svg",
        },
        {
            title: "+39 (999) 99-999-99",
            imgSrc: "/icons/germany.svg",
        },
        {
            title: "+380 (99) 999-99-99 2",
            imgSrc: "/icons/ukraine.svg",
        },
        {
            title: "+1 (999) 999-9999 2",
            imgSrc: "/icons/usa.svg",
        },
        {
            title: "+39 (999) 99-999-99 2",
            imgSrc: "/icons/germany.svg",
        },
    ];

    const [activeVariant, setActiveVariant] = useState(variants[0]);

    return (
        <div className={styles.wrapper}>
            <Select
                activeVariant={activeVariant}
                setActiveVariant={setActiveVariant}
                variants={variants}
                className={styles.variants}
            />
        </div>
    );
};

export default PhoneSelect;
