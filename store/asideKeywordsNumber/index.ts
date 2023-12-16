import { AnyAction } from "redux";
import { initStore } from "./initStore";

const asideKeywordsNumberReducer = (state = initStore, action: AnyAction) => {
	switch (action.type) {
		case "SET_ASIDE_KEYWORDS_NUMBER":
			return {
				...state,
				asideKeywordsNumber: action.number,
			};
		default:
			return state;
	}
};

export default asideKeywordsNumberReducer;