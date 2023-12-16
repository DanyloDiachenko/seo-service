import { useState } from "react";

import IVariant from "components/UI/Select/select.interface";
import styles from "./select.module.scss";
import Select from "components/UI/Select";

const LanguageSelect = (): JSX.Element => {
    const variants: IVariant[] = [
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "English",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "Русский",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "Українська",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "Қазақ",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "Deutsch",
        },
    ];

    const [activeVariant, setActiveVariant] = useState<IVariant>(variants[0]);

    return (
        <div className={styles.wrapper}>
            <Select
                variants={variants}
                activeVariant={activeVariant}
                setActiveVariant={setActiveVariant}
                className={styles.variants}
            />
        </div>
    );
};

export default LanguageSelect;
