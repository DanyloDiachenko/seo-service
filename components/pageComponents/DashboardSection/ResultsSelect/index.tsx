import { useState } from "react";

import styles from "./resultsSelect.module.scss";
import Select from "components/UI/Select";
import IVariant from "components/UI/Select/select.interface";

const ResultsSelect = (): JSX.Element => {
    const variants: IVariant[] = [
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "100 results per page",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "200 results per page",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "300 results per page",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "400 results per page",
        },
        {
            imgSrc: "/icons/icon-imitation.svg",
            title: "500 results per page",
        },
    ];

    const [activeVariant, setActiveVariant] = useState<IVariant>(variants[0]);

    return (
        <div className={styles.selectWrapper}>
            <Select
                variants={variants}
                activeVariant={activeVariant}
                setActiveVariant={setActiveVariant}
                className={styles.select}
            />
        </div>
    );
};

export default ResultsSelect;
