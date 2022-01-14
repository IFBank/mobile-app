import React from "react";

import { Image } from "react-native";

import GenericHeader from '../../components/Header';

import { Container, TextHeader, Title, SubTitle} from "./styles";

import logoIFbank from "../../assets/minilogo.png"

const SignupFlowPage: React.FC = () => {
	return (
		<Container>
			<GenericHeader>
				<TextHeader>
					Cadastramento 
				</TextHeader>
				<Image source={logoIFbank} />
			</GenericHeader>

			<Title>
				Validação do RA
			</Title>

			<SubTitle>
				Verificaremos se você é um estudante do IFMS Campus Campo Grande. 
			</SubTitle>	

		</Container>
	)
}

export default SignupFlowPage;