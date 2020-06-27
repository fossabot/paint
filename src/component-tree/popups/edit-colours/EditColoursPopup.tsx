import { Popup } from '../Popup';
import React from 'react';
import styled from 'styled-components';
import { BasicColours } from './colours-column/sub-components/BasicColours';
import { CustomColours} from './colours-column/sub-components/CustomColours';
import { ModalButton } from './styles/ModalButton';

const StyledContent = styled.div`
	background: rgb(240, 240, 240);
	padding-bottom: 7px;
`;

const CloseButtons = () => {
	return <div style={{position: 'relative', left: '-1px'}}>
		<ModalButton style={{width: '62px', marginRight: '8px'}}>OK</ModalButton>
		<ModalButton style={{width: '62px'}}>Cancel</ModalButton>
	</div>;
};

const ColorPicker = () => {
	return <></>;
};

const ColorOptions = () => {
	return <></>;
};

const AddToCustomColours = () => {
	return <></>;
};

export const EditColoursPopup = () => {
	return <Popup title='Edit Colours' style={{width: '400px'}}>
		<StyledContent>
			<div style={{display: 'flex', flexDirection: 'column', width: '50%', paddingLeft: '6px'}}>
				<BasicColours/>
				<CustomColours/>
				<CloseButtons/>
			</div>

			<div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
				<ColorPicker/>
				<ColorOptions/>
				<AddToCustomColours/>
			</div>
		</StyledContent>
	</Popup>;
};
