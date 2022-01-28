import React, { useContext } from 'react';

import { Image } from "react-native";
import { Container, TextHeader } from "./styles";

import { ThemeContext } from '../../themes.ts'

import logoIFbank from "../../assets/minilogo.png"

interface HeaderProps {
	children: any
}

const Header: React.FC<HeaderProps> = ({ options, route, ... rest }) => {
	const theme = useContext(ThemeContext);

	return (
		<Container theme={theme} { ... rest}>
			<TextHeader>
				{options?.title || route?.name} 
			</TextHeader>
			<Image source={logoIFbank} />
		</Container>
	)

};

export default Header;