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
}

const BoxSaldo: React.FC<BoxSaldoProps> = ({imageSource, mainText, subTitleText, typeOfEmpty}) => {

	const theme = useContext(ThemeContext);

	return (
		<BoxContainerStyled typeOfEmpty={typeOfEmpty}>
			<Image source={imageSource}/>
			<ContentContainer>
				<MainText>
					{mainText}
				</MainText>
				<SubTitleText typeOfEmpty={typeOfEmpty}>
					{subTitleText}
				</SubTitleText>
				<StyledButton fontSize={12} theme={theme}>
					Fazer um pedido
				</StyledButton>	
			</ContentContainer> 
			
		</BoxContainerStyled>
	)
}

export default BoxSaldo;
