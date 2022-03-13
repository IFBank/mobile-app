import React, { useContext } from 'react';

import DropShadow from "react-native-drop-shadow";

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
		<DropShadow
			style={{
				shadowColor: theme.shadow,
				shadowOffset: {
					width: 0,
					height: 4,
				},
				shadowOpacity: 0.75,
				shadowRadius: 1
			}}
		>
		<Container colors={theme.linear.primary} start={{x: 0, y: 0}} end={{x: 1, y: 0}} { ... rest}>
			<TextHeader textColor={theme.background}>
				{options?.title || route?.name} 
			</TextHeader>
			<Image source={logoIFbank} />
		</Container>
		</DropShadow>
	)

};

export default Header;