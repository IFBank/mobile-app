import React from 'react';

import { TextInputProps } from "react-native"

import { Container, InputStyled, HeaderInput} from "./styles";


interface InputProps extends TextInputProps{
	headerText: string;
	style: any;
}

const Input: React.FC<InputProps> = ({ headerText, style, ... rest}) => {
	// TODO: Implementar o estado do input de focus e sua estilizaçao
	return (
		<Container style={style}>
			<HeaderInput>
				{headerText}
			</HeaderInput>
			<InputStyled {... rest} />
		</Container>
	)

};

export default Input;