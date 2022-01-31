import React from "react";

import { Platform } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { Container, IconStyled } from "./styles";

const TopBackButton: React.FC = ({ ... rest }) => {
	const navigation = useNavigation();

	return (
		<Container { ... rest } >

			<IconStyled
				iconStyle={{marginRight: 8}}
				name={Platform.OS == "ios"? "arrow-back-ios" : "arrow-back" }
				size={30}
				backgroundColor="#00000000" 
				color="#000"
				onPress={ () => {navigation.goBack()}}
			/>
			
		</Container>
	)

};

export default TopBackButton;
