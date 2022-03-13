import styled from 'styled-components/native';

import { fonts } from '../../fonts'

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	padding: 2px 20px;
	flex-direction: row;
	align-items: center;
	border-radius: 20px;
	background-color: #fff;
`;

export const InputStyled = styled.TextInput`
	padding: 0px;
	flex-grow: 1;
	font-size: 15px;
`;

export const HeaderInput = styled.Text`
	font-size: 16px;
	font-family: ${ fonts.text.regular };
`