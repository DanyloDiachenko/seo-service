import { AnyAction } from "redux";
import { initStore } from "./initStore";

const asideSearchReducer = (state = initStore, action: AnyAction) => {
	switch (action.type) {
		case "SET_ASIDE_SEARCH_INPUT_VALUE":
			return {
				...state,
				asideSearchValue: action.valueToChange,
			};
		default:
			return state;
	}
};

export default asideSearchReducer;