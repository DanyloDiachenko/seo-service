export interface INewProjectStages {
	currentStage: "generalInformation" | "keywords" | "searchSystems";
	visibleCurrentStage: "generalInformation" | "keywords" | "searchSystems";
}

export const initStore: INewProjectStages = {
	currentStage: "generalInformation",
	visibleCurrentStage: "generalInformation"
};


