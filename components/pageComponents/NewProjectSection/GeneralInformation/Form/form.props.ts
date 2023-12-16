import { INewProjectStages } from 'store/newProjectStages/initStore';

export default interface GeneralInformationFormProps {
	setNextNewProjectStage: (stageToChange: INewProjectStages["currentStage"]) => void;
	setNextNewProjectVisbleStage: (stageToChange: INewProjectStages["currentStage"]) => void;
};