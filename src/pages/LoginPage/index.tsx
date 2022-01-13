import React from "react";
import { Image, StyleSheet} from "react-native";

import { 
	Container, 
	LogoContainer, 
	ContentContainer, 
	Title, 
	Button, 
	ButtonText, 
	Input 
} from "./styles"

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
					<ButtonText>
						Iniciar Sessão	
					</ButtonText>
				</Button>

			</ContentContainer>
			
		</Container>
	)
}

export default InitApp;
