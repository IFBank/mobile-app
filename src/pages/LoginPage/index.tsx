import React, { useRef, useCallback, useContext } from "react";
import { Image, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { ThemeContext } from '../../themes.ts'

import { 
	Container, 
	LogoContainer, 
	ContentContainer, 
	Title, 
	Button, 
	Input 
} from "./styles"

import Logo from "../../assets/logo.svg"


const LoginPage: React.FC = () => {
	const navigation = useNavigation();
	const theme = useContext(ThemeContext)

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
				contentContainerStyle={{ flexGrow: 1 }}
			>
				<Container colors={theme.linear.primary} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
					<LogoContainer>
						<Logo />
					</LogoContainer>

					<ContentContainer theme={theme}>
					
						<Title theme={theme}>
							Login
						</Title>
				
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
								text="LOGIN"
								textColor={theme.background}
								textFontSize={16}
								borderRadius={30}
								innerStyle={{
									paddingHorizontal: 80,
									paddingVertical: 15,
								}}
								gradientColor="primary"

								onPress={
									() => {
										formRef.current?.submitForm()
									}
								}
							/>

							<Button 
								text="NÃO TENHO CADASTRO"
								textColor={theme.linear.secondary[0]}
								textFontSize={14}
								borderRadius={30}
								innerStyle={{
									paddingHorizontal: 20,
									paddingVertical: 15,
									backgroundColor: theme.background
								}}
								gradientColor="secondary"

								onPress={
									() => {
										navigation.navigate("CadastroFlow")
									}
								}
							/>

						</Form>
						
					</ContentContainer>
					
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default LoginPage;
