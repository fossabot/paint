import { AppState, Dropdowns } from '../../types';
import { ActionTypes } from '../action-types.enum';
import { Action } from '../action.type';
import { initialState } from '../initial-state';
import { colorReducer } from './colors.reducer';

export const rootReducer = (state = initialState, action: Action): AppState => {
	switch (action.type) {
		case ActionTypes.MAXIMIZE:
			return { ...state, isMaximized: true };
		case ActionTypes.TOGGLE_BOTTOM_BAR:
			return { ...state, isBottomBarVisible: !state.isBottomBarVisible };
		case ActionTypes.TOGGLE_BRUSH:
			return { ...state, isBrushActive: !state.isBrushActive };
		case ActionTypes.SELECT_TOOL:
			return { ...state, selectedTool: action.toolId };
		case ActionTypes.SET_TOOL_SIZE:
				return { ...state, toolSize: action.toolSize };
		case ActionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}

			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: Dropdowns.none,
			};
		case ActionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true,
			};
		case ActionTypes.SET_ACTIVE_TAB:
			return {...state, activeTab: action.tab};
		case ActionTypes.TOGGLE_RIBBON:
			return {...state,	isRibbonCollapsed: !state.isRibbonCollapsed};
	}

	return {
		...state,
		colors: colorReducer(state.colors, action),
	};
};
