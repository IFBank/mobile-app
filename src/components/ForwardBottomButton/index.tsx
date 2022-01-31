import React, { useContext }from 'react';
import { ThemeContext } from '../../themes'

import { Platform } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"


import { Container, IconButtonCircle } from "./styles";


interface ArrowNavegatorProps {
	readonly canGoNext?: boolean;
	nextPage: (any) => void; 
}

const ArrowNavegator: React.FC<ArrowNavegatorProps> = ({ canGoNext, nextPage, ... rest }) => {
	const theme = useContext(ThemeContext)

	return (
		<Container { ... rest } >

			<IconButtonCircle
				iconStyle={{marginRight: 8}}
				name={Platform.OS == "ios"? "arrow-forward-ios" : "arrow-forward" }
				size={30}
				backgroundColor={canGoNext == true ? theme.primary : theme.secundary_gray} 
				color="#FFF"
				borderRadius={50}
				onPress={ canGoNext ? nextPage : null }
			/>
			
		</Container>
	)

};

export default ArrowNavegator;
