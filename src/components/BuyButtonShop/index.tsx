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

			<IconButtonCircle
				iconStyle={{marginRight: 8}}
				name={Platform.OS == "ios"? "arrow-forward-ios" : "arrow-forward" }
				size={30}
				backgroundColor={theme.primary} 
				color="#FFF"
				borderRadius={50}
				onPress={ onPress }
			/>
			
		</Container>
	)

};

export default BuyButtonShop;
