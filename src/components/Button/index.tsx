import React, {useContext} from 'react';

import DropShadow from "react-native-drop-shadow";

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

	// FIX: No visual response on press event

	return (
		<DropShadow
			style={{
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 4,
				},
				shadowOpacity: 0.25,
				shadowRadius: 1,
			}}
		>
			<Container borderRadius={borderRadius}  { ... rest }  >
				<LinearGradientPadding 
					colors={theme.linear[gradientColor]} 
					start={{x: 0, y: 0}} 
					end={{x: 1, y: 0}} 
					style={{borderRadius}}
				>
					<TextView style={{...innerStyle, borderRadius}}>
						{ iconName != undefined &&
							<IconStyled name={iconName} size={iconSize} color={iconColor}/>
						}
						<ButtonText textFontSize={textFontSize} textColor={textColor} > {text} </ButtonText>
					</TextView>
				</LinearGradientPadding>
			</Container>
		</DropShadow>
	)

};

export default Button;
