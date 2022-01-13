import React from 'react';

import { Container, IconStyled, ButtonText } from "./styles";

interface ButtonProps{
	children: string;
	fontSize?: Integer;
	iconName? : string
	iconSize? : Integer;
	iconColor? : string; 
}

const Button: React.FC<ButtonProps> = ({ children, iconName, iconSize, iconColor, fontSize, ... rest }) => {

	const Icon: React.FC = () => {
		if(iconName != undefined){
			return (
				<IconStyled name={iconName} size={iconSize} color={iconColor}/>
			)
		}

		return null;
	}

	return (
		<Container { ... rest } >
			<Icon />
			<ButtonText fontSize={fontSize}>
				{children}	
			</ButtonText>
		</Container>
	)

};

export default Button;
