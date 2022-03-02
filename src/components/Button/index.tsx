import React, {useContext} from 'react';

import { View } from 'react-native';

import { ThemeContext } from '../../themes.ts'

import { Container, TextView, IconStyled, ButtonText, LinearGradientPadding } from "./styles";

interface ButtonProps{
	text: string;
	textColor? : string; 
	textFontSize?: Integer;
	iconName? : string
	iconSize? : Integer;
	iconColor? : string; 
	gradientColor? : string; 
	borderRadius? : Integer;
	style? : any;
	innerStyle? : any;
}

const Button: React.FC<ButtonProps> = (
	{ 
		text="TESTE", 
		textColor="#FEFFFE", 
		textFontSize=16, 

		iconName, 
		iconSize, 
		iconColor, 

		gradientColor="primary",
		borderRadius=10,
		innerStyle, 
		... rest 
	}
) => {

	const theme = useContext(ThemeContext)

	return (
		<Container borderRadius={borderRadius} { ... rest }  >
			<LinearGradientPadding colors={theme.linear[gradientColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderRadius}}>
				<TextView style={{...innerStyle, borderRadius}}>
					{ iconName != undefined &&
						<IconStyled name={iconName} size={iconSize} color={iconColor}/>
					}
					<ButtonText textFontSize={textFontSize} textColor={textColor} > {text} </ButtonText>
				</TextView>
			</LinearGradientPadding>
		</Container>
				
	)

};

export default Button;
