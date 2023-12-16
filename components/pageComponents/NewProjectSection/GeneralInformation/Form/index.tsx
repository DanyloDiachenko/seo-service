import { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import styles from "./form.module.scss";
import { INewProjectStages } from "store/newProjectStages/initStore";
import GeneralInformationFormProps from "./form.props";

const GeneralInformationForm = ({
    setNextNewProjectStage,
    setNextNewProjectVisbleStage,
}: GeneralInformationFormProps): JSX.Element => {
    const [inputes, setInputes] = useState({
        websiteAdress: "",
        projectName: "",
    });

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        setNextNewProjectStage("keywords");
        setNextNewProjectVisbleStage("keywords");
    };

    return (
        <form
            onSubmit={submitHandler}
            className={styles.form}
            name="newProject"
        >
            <label className={styles.adressLabel} htmlFor="websiteAdress">
                <h3>Адрес сайта</h3>
                <p className="small">
                    Адрес сайта либо URL видео или канал на Youtube
                </p>
                <Input
                    id="websiteAdress"
                    name="websiteAdress"
                    placeholder="mycompany.com"
                    value={inputes.websiteAdress}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInputes({
                            ...inputes,
                            websiteAdress: e.target.value,
                        })
                    }
                    required
                />
            </label>
            <label className={styles.projectNameLabel} htmlFor="projectName">
                <h3>Название проекта</h3>
                <p className="small">Название проекта в панели управления</p>
                <Input
                    id="projectName"
                    name="projectName"
                    placeholder="Название проекта"
                    value={inputes.projectName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInputes({ ...inputes, projectName: e.target.value })
                    }
                    required
                />
            </label>
            <div className={styles.buttonWrapper}>
                <Button type="submit">continue</Button>
            </div>
        </form>
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

export default connector(GeneralInformationForm);
