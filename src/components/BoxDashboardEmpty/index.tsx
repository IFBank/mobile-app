import React, { useContext } from "react";

import { Image } from "react-native";

import { ThemeContext } from '../../themes.ts'

import {BoxContainerStyled, SaldoContainer, ContentContainer, MainText, SubTitleText, StyledButton} from "./styles"

import DashedLine from 'react-native-dashed-line';

interface BoxDashboardEmptyProps {
	imageSource: any;
	mainText: string;
	onButtonPress: () => {};
}

const BoxDashboardEmpty: React.FC<BoxDashboardEmptyProps> = ({imageSource, mainText, gradientColor="primary", ... rest}) => {

	const theme = useContext(ThemeContext);

	return (
		<BoxContainerStyled gradientColor={gradientColor}{ ... rest }>
			<Image source={imageSource}/>

			<MainText textColor={theme.linear[gradientColor][0]}>
				{mainText}
			</MainText>
							
		</BoxContainerStyled>
	)
}

export default BoxDashboardEmpty;
