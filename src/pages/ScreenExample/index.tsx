import React from "react";

import {Text} from "react-native";

import Header from '../../components/Header';

import { Container } from "./styles"

const ScreenExample: React.FC = () => {
	return (
		<Container>
			<Header>
				<Text>Teste</Text>
			</Header>
		</Container>
	)
}

export default ScreenExample;