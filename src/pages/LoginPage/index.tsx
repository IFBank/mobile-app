import React from "react";
import { Image, StyleSheet} from "react-native";

import { Container, LogoContainer, ContentContainer, Title, Input, Button } from "./styles"

import logoIFbank from "../../assets/logo.png"


const InitApp: React.FC = () => {

	return (
		<Container>
			<LogoContainer>
				<Image source={logoIFbank}/>
			</LogoContainer>

			<ContentContainer>
				<Title>
					Login
				</Title>

				<Input returnKeyType="next" headerText="Digite seu e-mail"/>
				<Input returnKeyType="done" headerText="Digite sua senha"/>

				<Button>
					Iniciar Sessão
				</Button>

			</ContentContainer>
			
		</Container>
	)
}

export default InitApp;
