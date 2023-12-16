import { connect } from "react-redux";

import styles from "./newProjectSection.module.scss";
import GeneralInformation from "./GeneralInformation";
import Keywords from "./Keywords";
import SearchSystems from "./SearchSystems";
import { INewProjectStages } from "store/newProjectStages/initStore";
import NewProjectSectionProps from "./newProjectSection.props";

const NewProjectSection = ({
    visibleCurrentStage,
}: NewProjectSectionProps): JSX.Element => {
    return (
        <>
            <div
                className={`${styles.wrapper} ${
                    visibleCurrentStage === "generalInformation"
                        ? styles.display
                        : styles.displayNone
                }`}
            >
                <GeneralInformation />
            </div>
            <div
                className={`${styles.wrapper} ${
                    visibleCurrentStage === "keywords"
                        ? styles.display
                        : styles.displayNone
                }`}
            >
                <Keywords />
            </div>
            <div
                className={`${styles.wrapper} ${
                    visibleCurrentStage === "searchSystems"
                        ? styles.display
                        : styles.displayNone
                }`}
            >
                <SearchSystems />
            </div>
        </>
    );
};

const mapState = (state: { newProjectStages: INewProjectStages }) => {
    return {
        visibleCurrentStage: state.newProjectStages.visibleCurrentStage,
    };
};
const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export default connector(NewProjectSection);
