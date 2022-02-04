import React, { useContext }from 'react';
import { ThemeContext } from '../../themes'

import { Platform } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, IconButtonCircle } from "./styles";


interface BuyButtonShopProps {
	onPress: (any) => void; 
}

const BuyButtonShop: React.FC<ArrowNavegatorProps> = ({ onPress, ... rest }) => {
	const theme = useContext(ThemeContext)

	return (
		<Container { ... rest } >

			<IconButtonCircle>
				<Icon iconStyle={{marginRight: 8}}
				name="shopping-cart"
				size={30}
				color="#FFF"
				onPress={ onPress }/>
			</IconButtonCircle>
			
		</Container>
	)

};

export default BuyButtonShop;
