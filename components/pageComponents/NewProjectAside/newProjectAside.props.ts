import { INewProjectStages } from 'store/newProjectStages/initStore';

export default interface NewProjectAsideProps {
	currentStage: INewProjectStages["currentStage"];
	visibleCurrentStage: INewProjectStages["currentStage"];
	setNextNewProjectVisbleStage: (stageToChange: INewProjectStages["currentStage"]) => void;
};