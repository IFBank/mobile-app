import React from "react";
import { Image, StyleSheet} from "react-native";

import { useNavigation } from '@react-navigation/native';

import { Container, LogoContainer, ContentContainer, Title, Button, ButtonText } from "./styles"

import logoIFbank from "../../assets/logo.png"


const InitApp: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<LogoContainer>
				<Image source={logoIFbank}/>
			</LogoContainer>

			<ContentContainer>
				<Title>
				Cadastre-se para desfrutar de nosso aplicativo
				</Title>

				<Button 
					fontSize={20} 
					onPress={
						() => {
							navigation.navigate('CadastroFlow')
						}	
					}
				>
					Criar cadastro	
				</Button >

				<Button 
					fontSize={20}
					onPress={
						() => {
							navigation.navigate('Login')
						}	
					}
				>
					Ja possuo cadastro	
				</Button>	
			</ContentContainer>
			
		</Container>
	)
}

export default InitApp;