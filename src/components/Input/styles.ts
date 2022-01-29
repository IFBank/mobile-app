import styled from 'styled-components/native';

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
	font-family: "Montserrat-Light";
`