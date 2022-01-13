import React from "react";
import { Image, StyleSheet} from "react-native";

import { Container, LogoContainer, ContentContainer, Title, Button } from "./styles"

import logoIFbank from "../../assets/logo.png"


const InitApp: React.FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Image source={logoIFbank}/>
			</LogoContainer>

			<ContentContainer>
				<Title>
				Cadastre-se para desfrutar de nosso aplicativo
				</Title>

				<Button>
					Criar cadastro
				</Button>

				<Button>
					Ja possuo cadastro
				</Button>	
			</ContentContainer>
			
		</Container>
	)
}

export default InitApp;