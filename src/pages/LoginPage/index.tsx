import React from "react";
import { Image, View, KeyboardAvoidingView, ScrollView, Plataform } from "react-native";

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


const LoginPage: React.FC = () => {

	return (
		<KeyboardAvoidingView 
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			enabled
		>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{ flex: 1 }}
			>
				<Container>
					<LogoContainer>
						<Image source={logoIFbank}/>
					</LogoContainer>

					<ContentContainer>
						<View style={{ alignItems: "center"}}>
							<Title>
								Login
							</Title>
						</View>

						<Input returnKeyType="next" headerText="Digite seu e-mail"/>
						<Input returnKeyType="done" headerText="Digite sua senha"/>

						<Button fontSize={24}>
							Iniciar Sessão	
						</Button>

					</ContentContainer>
					
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default LoginPage;
