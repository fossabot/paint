import React, { useState } from 'react';
import { Subheading } from './styles/Subheading';
import styled from 'styled-components';
import { ColorTile } from './ColorTile';
import { ColorPosition } from './ColorPosition.interface';
import { isColorActive } from './isColorActive';

const initialCustomColors = [
	['rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)'],

	// second row:
	['rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)'],
];

const Row = styled.div`
	display: flex;
	margin-bottom: 1px;
`;

const DefineCustomColors = () => {
	return <button disabled style={{
		position: 'relative',
		left: '-1px',
		width: 'calc(100% + 5px)',
		height: '19px',
		background: 'rgb(204,204,204)',
		border: '1px solid rgb(191,191,191)',
		lineHeight: '19px',
		outline: 'none'
	}}>
		Define Custom Colours &gt;&gt;
	</button>;
};

export const CustomColours = () => {
	const [selectedColor, setSelectedColor] = useState<ColorPosition | null>(null);

	return <div style={{paddingLeft: '6px', width: '100%'}}>
		<Subheading>Custom colours:</Subheading>

		{initialCustomColors.map((row, rowIndex) => <Row key={rowIndex}>
			{row.map((color, columnIndex) =>
				<ColorTile
					color={color}
					key={columnIndex}
					active={isColorActive(selectedColor, {rowIndex, columnIndex})}
					onClick={() => setSelectedColor({rowIndex, columnIndex})}
				/>
			)}
		</Row>)}

		<DefineCustomColors></DefineCustomColors>
	</div>;
};
