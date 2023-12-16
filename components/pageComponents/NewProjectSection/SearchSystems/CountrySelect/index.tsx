import { useState } from "react";

import Select from "components/UI/Select";
import IVariant from "components/UI/Select/select.interface";
import styles from "./searchSystemSelect.module.scss";

const CountrySelect = (): JSX.Element => {
    const variants: IVariant[] = [
        {
            title: "Україна",
            imgSrc: "/icons/ukraine.svg",
        },
        {
            title: "США",
            imgSrc: "/icons/usa.svg",
        },
        {
            title: "Германия",
            imgSrc: "/icons/germany.svg",
        },
        {
            title: "Україна 2",
            imgSrc: "/icons/ukraine.svg",
        },
        {
            title: "США 2",
            imgSrc: "/icons/usa.svg",
        },
        {
            title: "Германия 2",
            imgSrc: "/icons/germany.svg",
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

export default CountrySelect;
