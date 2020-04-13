import { AvailableTools, Dropdowns, IndexOfMainColor, Tabs, ToolSize, MouseButton, RGBAColor } from '../types';

export enum ActionTypes {
	APP_CLICK = 'APP_CLICK',
	CHANGE_BRUSH = 'CHANGE_BRUSH',
	MAXIMIZE = 'MAXIMIZE',
	SELECT_MAIN_COLOR_INDEX = 'SELECT_MAIN_COLOR_INDEX',
	SELECT_TOOL = 'SELECT_TOOL',
	SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
	SET_CANVAS_CONTEXT = 'SET_CANVAS_CONTEXT',
	SET_DROPDOWN = 'SET_DROPDOWN',
	SET_PRESSED_MOUSE_BUTTON_ON_CANVAS='SET_PRESSED_MOUSE_BUTTON_ON_CANVAS',
	SET_SELECTED_MAIN_COLOR = 'SET_SELECTED_MAIN_COLOR',
	SET_TOOL_SIZE = 'SET_TOOL_SIZE',
	TOGGLE_BOTTOM_BAR = 'TOGGLE_BOTTOM_BAR',
	TOGGLE_BRUSH = 'TOGGLE_BRUSH',
	TOGGLE_RIBBON = 'TOGGLE_RIBBON',
}

export type Actions = AppClickAction |
	MaximizeAction |
	SelectMainColorIndexAction |
	SelectToolAction |
	SetActiveTabAction |
	SetCanvasContext |
	SetDropdownAction |
	SetPressedMouseButtonOnCanvas |
	SetSelectedMainColorAction |
	SetToolSize |
	ToggleBottomBarAction |
	ToggleBrushAction |
	ToggleRibbonAction;

interface AppClickAction {
	type: ActionTypes.APP_CLICK;
}

interface MaximizeAction {
	type: ActionTypes.MAXIMIZE;
}

interface SelectMainColorIndexAction {
	type: ActionTypes.SELECT_MAIN_COLOR_INDEX;
	colorIndex: IndexOfMainColor;
}

interface SelectToolAction {
	type: ActionTypes.SELECT_TOOL;
	toolId: AvailableTools;
}

interface SetActiveTabAction {
	type: ActionTypes.SET_ACTIVE_TAB;
	tab: Tabs;
}

interface SetCanvasContext {
	type: ActionTypes.SET_CANVAS_CONTEXT;
	context: CanvasRenderingContext2D | null
}

interface SetDropdownAction {
	type: ActionTypes.SET_DROPDOWN;
	dropdown: Dropdowns;
}

interface SetPressedMouseButtonOnCanvas {
	type: ActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS,
	newPressedButton: MouseButton
}

interface SetSelectedMainColorAction {
	type: ActionTypes.SET_SELECTED_MAIN_COLOR;
	newColor: RGBAColor;
}

interface SetToolSize {
	type: ActionTypes.SET_TOOL_SIZE;
	toolSize: ToolSize;
}

interface ToggleBottomBarAction {
	type: ActionTypes.TOGGLE_BOTTOM_BAR;
}

interface ToggleBrushAction {
	type: ActionTypes.TOGGLE_BRUSH;
}

interface ToggleRibbonAction {
	type: ActionTypes.TOGGLE_RIBBON;
}
