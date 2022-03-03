import React, { useContext }from 'react';
import { ThemeContext } from '../../themes'

import { Platform } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"


import { Container, IconButtonCircle } from "./styles";


interface ArrowNavegatorProps {
	readonly hasBackScreen?: boolean;
	backPage?: (any) => void; 
	nextPage: (any) => void; 
}

const ArrowNavegator: React.FC<ArrowNavegatorProps> = ({ hasBackScreen, backPage, nextPage, ... rest }) => {
	const theme = useContext(ThemeContext)

	return (
		<Container { ... rest } >
			{/*Left Icon*/}
			<IconButtonCircle
				iconStyle={{marginRight: 8}}
				name={Platform.OS == "ios"? "arrow-back-ios" : "arrow-back" }
				size={30}
				backgroundColor={hasBackScreen == true ? theme.linear.primary[0] : theme.semantic_disable} 
				color={theme.background}
				borderRadius={50}
				onPress={ hasBackScreen ? backPage : null}
			/>
			
			{/*Right Icon*/}
			<IconButtonCircle
				iconStyle={{marginRight: 8}}
				name={Platform.OS == "ios"? "arrow-forward-ios" : "arrow-forward" }
				size={30}
				backgroundColor={theme.linear.primary[0]}
				color={theme.background}
				borderRadius={50}
				onPress={nextPage}
			/>
		</Container>
	)

};

export default ArrowNavegator;
