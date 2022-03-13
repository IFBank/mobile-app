import styled from 'styled-components/native';

import { fonts } from '../../fonts'

interface TabButtonProps {
	isFocused: boolean;
}

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
`;

export const TabButton = styled.TouchableOpacity<ContainerProps>`
	justify-content: center;
	align-items: center;
	flex: 1;

	border-bottom-width: 2px;
	border-color: ${ ({isFocused, theme}) => (isFocused ? theme.linear.primary[0] : theme.background)} ;
`;

export const InputStyled = styled.TextInput`
	padding: 0px;
	width: auto;
`;

export const HeaderInput = styled.Text`
	font-size: 16px;
	font-family: ${ fonts.text.semibold };
`