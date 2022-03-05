import styled from 'styled-components/native';

import {fonts} from '../../fonts'

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
`;

export const InputStyled = styled.TextInput`
	border-bottom-width: 2px;
	border-bottom-color: ${ ({isFocused=false}) => isFocused ? "#111" : "#C1C1C1" };

	padding: 0px;
	padding-left: 2px;
	width: 100px;
`;

export const HeaderInput = styled.Text`
	font-size: 30px;
	font-family: ${ fonts.text.regular };
	color: #000;
`