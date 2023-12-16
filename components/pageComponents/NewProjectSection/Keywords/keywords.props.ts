import { INewProjectStages } from 'store/newProjectStages/initStore';

export default interface KeywordsProps {
	setNextNewProjectStage: (stageToChange: INewProjectStages["currentStage"]) => void;
	setNextNewProjectVisbleStage: (stageToChange: INewProjectStages["currentStage"]) => void;
};