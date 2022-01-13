import React from "react";
import { Image, StyleSheet} from "react-native";

import { Container, LogoContainer, ContentContainer, Title, Button, ButtonText } from "./styles"

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
					<ButtonText>
						Criar cadastro	
					</ButtonText>		
				</Button>

				<Button>
					<ButtonText>
						Ja possuo cadastro
					</ButtonText>		
				</Button>	
			</ContentContainer>
			
		</Container>
	)
}

export default InitApp;