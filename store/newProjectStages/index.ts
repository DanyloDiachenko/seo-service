import { AnyAction } from "redux";
import { initStore } from "./initStore";

const newProjectStagesReducer = (state = initStore, action: AnyAction) => {
	switch (action.type) {
		case "SET_NEXT_STAGE":
			return {
				...state,
				currentStage: action.stageToChange,
			};
		case "SET_VISIBLE_STAGE":
			return {
				...state,
				visibleCurrentStage: action.stageToChange,
			};
		default:
			return state;
	}
};

export default newProjectStagesReducer;