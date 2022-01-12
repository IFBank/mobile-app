import styled from 'styled-components/native';

// TODO: Implementar o estado do input de focus e sua estilizaçao
export const Container = styled.View`
border-bottom-width: 2px;
border-bottom-color: ${ ({focus=false}) => focus ? "#111" : "#C1C1C1" };
`;

export const InputStyled = styled.TextInput`
	padding: 0px;
	padding-left: 9px;
	width: 100%;
`;

export const HeaderInput = styled.Text`
	font-size: 14px;
`