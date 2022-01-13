import React from 'react';

import { Container, ButtonText } from "./styles";

interface ButtonProps{
	children: React.Component;
}

const Button: React.FC<ButtonProps> = ({ children, ... rest }) => {

	return (
		<Container { ... rest } >
			{children}	
		</Container>
	)

};

export default Button;
