import { combineReducers } from "redux";

import user from "./reducers/user";
import themes from "./reducers/themes";

export default combineReducers({
	user,
	themes
});
