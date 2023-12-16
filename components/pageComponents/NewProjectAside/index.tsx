import { connect } from "react-redux";

import { INewProjectStages } from "store/newProjectStages/initStore";
import styles from "./newProjectAside.module.scss";
import NewProjectAsideProps from "./newProjectAside.props";

const NewProjectAside = ({
    currentStage,
    visibleCurrentStage,
    setNextNewProjectVisbleStage,
}: NewProjectAsideProps): JSX.Element => {
    const generalInformationClassName = (): string => {
        if (currentStage === "generalInformation") {
            return styles.stepsCompleting;
        }
        if (currentStage === "keywords" || currentStage === "searchSystems") {
            return styles.stepsCompleted;
        }

        return "";
    };

    const keywordsClassName = (): string => {
        if (currentStage === "keywords") {
            return styles.stepsCompleting;
        }
        if (currentStage === "generalInformation") {
            return "";
        }
        if (currentStage === "searchSystems") {
            return styles.stepsCompleted;
        }

        return "";
    };

    const searchSystemsClassName = (): string => {
        if (currentStage === "searchSystems") {
            return styles.stepsCompleting;
        }
        if (
            currentStage === "generalInformation" ||
            currentStage === "keywords"
        ) {
            return "";
        }

        return "";
    };

    const setPreviousNewProjectStageGeneralInformation = (): void => {
        if (currentStage !== "generalInformation") {
            setNextNewProjectVisbleStage("generalInformation");
        }
    };

    const setPreviousNewProjectStageKeywords = (): void => {
        if (
            currentStage === "searchSystems" ||
            visibleCurrentStage === "searchSystems"
        ) {
            setNextNewProjectVisbleStage("keywords");
        }
        if (
            currentStage === "keywords" &&
            visibleCurrentStage === "generalInformation"
        ) {
            setNextNewProjectVisbleStage("generalInformation");
        }
        if (
            visibleCurrentStage === "generalInformation" &&
            currentStage === "keywords"
        ) {
            setNextNewProjectVisbleStage("keywords");
        }
    };

    const setPreviousNewProjectStageSearchSystems = (): void => {
        if (
            visibleCurrentStage === "generalInformation" &&
            currentStage === "keywords"
        ) {
            return;
        }
        if (currentStage === "keywords" || visibleCurrentStage === "keywords") {
            setNextNewProjectVisbleStage("keywords");
        }
        if (
            currentStage === "searchSystems" &&
            visibleCurrentStage !== "generalInformation"
        ) {
            setNextNewProjectVisbleStage("generalInformation");
        }
        if (currentStage === "searchSystems") {
            setNextNewProjectVisbleStage("searchSystems");
        }
    };

    return (
        <aside className={styles.aside}>
            <div className={`${styles.circle} ${styles.circleTopLeft}`}></div>
            <div
                className={`${styles.circle} ${styles.circleBottomLeft}`}
            ></div>
            <div className={`${styles.circle} ${styles.circleTopRight}`}></div>
            <div className={styles.logo}>LOGO</div>
            <h2>
                Создание <br /> нового проекта
            </h2>
            <div className={styles.steps}>
                <ol className={styles.progress}>
                    <li className={generalInformationClassName()}>
                        <div className={styles.stepsNumber}>1</div>
                        <h3
                            onClick={
                                setPreviousNewProjectStageGeneralInformation
                            }
                        >
                            Общая информация
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                    <li className={keywordsClassName()}>
                        <div className={styles.stepsNumber}>2</div>
                        <h3 onClick={setPreviousNewProjectStageKeywords}>
                            Ключевые слова
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                    <li className={searchSystemsClassName()}>
                        <div className={styles.stepsNumber}>3</div>
                        <h3 onClick={setPreviousNewProjectStageSearchSystems}>
                            Поисковые системы
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                </ol>
            </div>

            <div className={styles.stepsAdaptive}>
                <ol className={styles.progress}>
                    <li className={styles.stepsCompleted}>
                        <div className={styles.stepsNumber}>1</div>
                        <h3
                            onClick={
                                setPreviousNewProjectStageGeneralInformation
                            }
                        >
                            Общая информация
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                    <li className={styles.stepsCompleting}>
                        <div className={styles.stepsNumber}>2</div>
                        <h3 onClick={setPreviousNewProjectStageKeywords}>
                            Ключевые слова
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                    <li>
                        <div className={styles.stepsNumber}>3</div>
                        <h3 onClick={setPreviousNewProjectStageSearchSystems}>
                            Поисковые системы
                        </h3>
                        <div className={styles.description}>Title</div>
                    </li>
                </ol>
            </div>
        </aside>
    );
};

const mapState = (state: { newProjectStages: INewProjectStages }) => {
    return {
        currentStage: state.newProjectStages.currentStage,
        visibleCurrentStage: state.newProjectStages.visibleCurrentStage,
    };
};
const mapDispatch = {
    setNextNewProjectVisbleStage: (
        stageToChange: INewProjectStages["currentStage"],
    ) => ({ type: "SET_VISIBLE_STAGE", stageToChange }),
};

const connector = connect(mapState, mapDispatch);

export default connector(NewProjectAside);
