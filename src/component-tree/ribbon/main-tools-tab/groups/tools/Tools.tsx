import { useSelector } from 'react-redux';
import * as actionCreators from '../../../../../redux/action-creators';
import store from '../../../../../redux/store';

import { AppState, AvailableTools } from '../../../../../types';
import './Tools.scss';
import { useLang } from '../../../../../hooks';

type IconType = 1 | 2 | 3;

function selectTool(tool: AvailableTools) {
	store.dispatch(actionCreators.selectTool(tool));
}

const Tool = ({tool, iconType}: {
	tool: AvailableTools,
	iconType: IconType,
}) => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);

	const getToolClassName = () => {
		return `Tools__icon-${iconType} ` + (selectedTool === tool ? 'Tools__icon--active' : '');
	};

	return <div onClick={() => selectTool(tool)}
		className={getToolClassName()}
	>
		<img className='Tools__iconImage' draggable='false'
		src={require(`../../../../../assets/icons/main-tools-tab/3_tools/${tool}.png`)} alt=''/>
	</div>;
};

const ToolsIconRow = ({tools}: {tools: AvailableTools[]}) => {
	return 	<div className='Tools__iconRow'>
		<Tool tool={tools[0]} iconType={1}></Tool>
		<Tool tool={tools[1]} iconType={2}></Tool>
		<Tool tool={tools[2]} iconType={3}></Tool>
	</div>;
};

const Tools = () => {
	const lang = useLang();

	return <div className='Tools'>
		<ToolsIconRow tools={[AvailableTools.Pencil, AvailableTools.Fill, AvailableTools.Text]}></ToolsIconRow>
		<ToolsIconRow tools={[AvailableTools.Eraser, AvailableTools.ColorPicker, AvailableTools.Magnifier]}></ToolsIconRow>

		<div className='Tools__description'>
			{lang.homeTabs.tools.title}
		</div>
	</div>;
};

export default Tools;
