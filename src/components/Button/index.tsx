import React from 'react';


import { Container, ButtonText } from "./styles";

interface ButtonProps {
	children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ... rest }) => {

	return (
		<Container { ... rest } >
			<ButtonText>
				// TODO: Permitir outros componetes  de vez somente string
				{children}	
			</ButtonText>
		</Container>
	)

};

export default Button;