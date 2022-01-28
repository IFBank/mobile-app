import React, { useContext } from "react";

import { Image } from "react-native";

import { ThemeContext } from '../../themes.ts'

import BoxContainer from '../BoxContainer';

import { SaldoContainer, ContentContainer, MainText, SubTitleText, StyledButton} from "./styles"

import DashedLine from 'react-native-dashed-line';

interface BoxSaldoProps {
	imageSource: any;
	mainText: string;
	subTitleText: string;
}

const BoxSaldo: React.FC<BoxSaldoProps> = ({imageSrc, mainText, subTitleText}) => {

	const theme = useContext(ThemeContext);

	return (
		<BoxContainer>
			{/*<Image source={imageSrc}/>*/}
			<ContentContainer>
				<MainText>
					{mainText}
				</MainText>
				<SubTitleText>
					{subTitleText}
				</SubTitleText>
				<StyledButton fontSize={12} theme={theme}>
					Fazer um pedido
				</StyledButton>	
			</ContentContainer> 
			
		</BoxContainer>
	)
}

export default BoxSaldo;
