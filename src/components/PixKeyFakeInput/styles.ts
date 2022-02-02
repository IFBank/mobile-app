import styled from 'styled-components/native';

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	border-bottom-width: 2px;
	border-bottom-color: #111;
`;

export const TextShowStyled = styled.Text`
	padding: 0px;
	padding-left: 9px;
	font-size: 16px;
	width: 100%;
`;

