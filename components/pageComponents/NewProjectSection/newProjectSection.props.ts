import { INewProjectStages } from 'store/newProjectStages/initStore';

export default interface NewProjectSectionProps {
	visibleCurrentStage: INewProjectStages["currentStage"];
};