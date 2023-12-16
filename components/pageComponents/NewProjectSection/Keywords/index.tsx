import { useState } from "react";
import { connect } from "react-redux";

import { INewProjectStages } from "store/newProjectStages/initStore";
import styles from "./keywords.module.scss";
import Button from "components/UI/Button";
import TextareaKeywords from "./TextareaKeywords";
import KeywordsProps from "./keywords.props";
import { FormEvent } from "react";

const Keywords = ({
    setNextNewProjectStage,
    setNextNewProjectVisbleStage,
}: KeywordsProps): JSX.Element => {
    const [textareaValue, setTextareaValue] = useState<string>("");

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        setNextNewProjectStage("searchSystems");
        setNextNewProjectVisbleStage("searchSystems");
    };

    return (
        <>
            <h1 className={styles.title}>Ключевые слова</h1>
            <p className={styles.description}>
                Отслеживайте позиции вашего сайта по всем интересующим вас
                ключевым словам. Для получения полной картины дополните
                семантику своего сайта ключевыми словами, собранными при помощи
                сервиса.
            </p>
            <form
                onSubmit={submitHandler}
                name="keywords"
                className={styles.form}
            >
                <label htmlFor="keywords">
                    <h3>Добавить ключевые слова</h3>
                    <p className="small">
                        Введите ключевые слова (до 200 штук)
                    </p>
                    <TextareaKeywords
                        textareaValue={textareaValue}
                        setTextareaValue={setTextareaValue}
                    />
                </label>
                <div className={styles.buttonWrapper}>
                    <Button type="submit">continue</Button>
                </div>
            </form>
        </>
    );
};

const mapState = (): {} => {
    return {};
};
const mapDispatch = {
    setNextNewProjectStage: (
        stageToChange: INewProjectStages["currentStage"],
    ) => ({ type: "SET_NEXT_STAGE", stageToChange }),
    setNextNewProjectVisbleStage: (
        stageToChange: INewProjectStages["currentStage"],
    ) => ({ type: "SET_VISIBLE_STAGE", stageToChange }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Keywords);
