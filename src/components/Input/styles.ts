import styled from 'styled-components/native';

import { fonts } from '../../fonts'

import Icon from "react-native-vector-icons/MaterialIcons"

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	border-bottom-width: 2px;
	border-bottom-color: ${ ({isFocused=false}) => isFocused ? "#111" : "#C1C1C1" };
`;

export const InputStyled = styled.TextInput`
	padding: 0px;
	padding-left: 9px;
	width: 100%;
`;

export const HeaderInput = styled.Text`
	font-size: 14px;
	font-family: ${ fonts.text.regular };
`

export const InputContainer = styled.View`
	flex-direction: row;
	width: 100%;
`;

export const IconStyled = styled(Icon)`
	
`;