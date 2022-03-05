import React, { useContext } from "react";

import { Image } from "react-native";

import { ThemeContext } from '../../themes.ts'

import {BoxContainerStyled, SaldoContainer, ContentContainer, MainText, SubTitleText, StyledButton} from "./styles"

import DashedLine from 'react-native-dashed-line';

interface BoxSaldoProps {
	imageSource: any;
	mainText: string;
	subTitleText: string;
	typeOfEmpty: string;
	onButtonPress: () => {};
}

const BoxSaldo: React.FC<BoxSaldoProps> = ({imageSource, mainText, subTitleText, buttonText, typeOfEmpty, onButtonPress, gradientColor, ... rest}) => {

	const theme = useContext(ThemeContext);

	return (
		<BoxContainerStyled typeOfEmpty={typeOfEmpty} gradientColor={gradientColor}{ ... rest }>
			<Image source={imageSource}/>
			<ContentContainer>
				<MainText textColor={theme.linear.semantic_red[0]}>
					{mainText}
				</MainText>
				<SubTitleText typeOfEmpty={typeOfEmpty} textColor={theme.text.title}>
					{subTitleText}
				</SubTitleText>
				<StyledButton 
					gradientColor={gradientColor}
					text={buttonText}
					textFontSize={12} 
					innerStyle={{
						paddingHorizontal: 6, 
						paddingVertical: 8
					}}
					onPress={onButtonPress}
				/>
					
			</ContentContainer> 
			
		</BoxContainerStyled>
	)
}

export default BoxSaldo;
