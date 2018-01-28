import { createSelector } from "reselect";

export default function themes(state = {}, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}

export const themesSelector = state => state.themes;

export const allThemesSelector= createSelector(themesSelector,	themesHash => 
	Object.values(themesHash)
);