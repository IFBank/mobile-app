import React, { useRef, useCallback } from "react";
import { Image, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

import { 
	Container, 
	LogoContainer, 
	ContentContainer, 
	Title, 
	Button, 
	ButtonText, 
	Input 
} from "./styles"

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import logoIFbank from "../../assets/logo.png"


const LoginPage: React.FC = () => {
	const formRef = useRef<FormHandles>(null)

	const handleLogin = useCallback((data: object) => {
		// TODO: consulta na API e ações necessarias
		console.log(data)
	}, [])

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

						<Form ref={formRef} onSubmit={handleLogin}>
							
							<Input 
								name='email' 
								headerText="Digite seu e-mail"
								keyboardType="email-address" 
								autoCapitalize="none"
								autoCorrect={false}
								returnKeyType="next" 
								
							/>
							<Input 
								name="password" 
								headerText="Digite sua senha"
								secureTextEntry={true}
								returnKeyType="done" 
							/>

							<Button 
								fontSize={24}
								onPress={
									() => {
										formRef.current?.submitForm()
									}
								}
							>
								Iniciar Sessão	
							</Button>	

						</Form>
						

					</ContentContainer>
					
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default LoginPage;
