import React, { useContext }from 'react';
import { ThemeContext } from '../../themes'

import { Platform } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, IconButtonCircle, LinearGradientStyled } from "./styles";


interface BuyButtonShopProps {
	onPress: (any) => void; 
}

const BuyButtonShop: React.FC<ArrowNavegatorProps> = ({ onPress, ... rest }) => {
	const theme = useContext(ThemeContext)

	return (
		<Container { ... rest } >
			<IconButtonCircle>

				<LinearGradientStyled colors={theme.linear.secondary} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
					
					<Icon 
						iconStyle={{marginRight: 8}}
						name="shopping-cart"
						size={30}
						color={theme.background}
						onPress={ onPress }
					/>

				</LinearGradientStyled>
				
			</IconButtonCircle>
		</Container>
	)

};

export default BuyButtonShop;
