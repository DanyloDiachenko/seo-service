import { useState } from "react";

import Select from "components/UI/Select";
import IVariant from "components/UI/Select/select.interface";
import styles from "./searchSystemSelect.module.scss";

const SearchSystemSelect = (): JSX.Element => {
    const variants: IVariant[] = [
        {
            title: "Google",
            imgSrc: "/icons/google-color.svg",
        },
        {
            title: "Baidu",
            imgSrc: "/icons/baidu.svg",
        },
        {
            title: "Yandex",
            imgSrc: "/icons/yandex.svg",
        },
        {
            title: "Google 1",
            imgSrc: "/icons/google-color.svg",
        },
        {
            title: "Baidu 2",
            imgSrc: "/icons/baidu.svg",
        },
        {
            title: "Yandex 3",
            imgSrc: "/icons/yandex.svg",
        },
    ];

    const [activeVariant, setActiveVariant] = useState(variants[0]);

    return (
        <Select
            variants={variants}
            className={styles.countrySelect}
            setActiveVariant={setActiveVariant}
            activeVariant={activeVariant}
        />
    );
};

export default SearchSystemSelect;
