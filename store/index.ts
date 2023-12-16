import { createStore, combineReducers } from "redux";

import popupsReducer from './popups';
import newProjectStagesReducer from './newProjectStages';
import asideSearchReducer from './asideSearch';
import asideKeywordsNumberReducer from './asideKeywordsNumber';

const store = createStore(
	combineReducers({
		popups: popupsReducer,
		newProjectStages: newProjectStagesReducer,
		asideSearch: asideSearchReducer,
		asideKeywordsNumber: asideKeywordsNumberReducer
	})
);

export default store;