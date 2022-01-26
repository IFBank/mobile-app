import React, { useContext, useCallback, useRef } from "react";
import { ThemeContext } from '../../themes'

import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import GenericHeader from '../../components/Header';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { Container, TextHeader, ImageContainer, Input, ButtonContainer, IconStyled, Button } from "./styles"

import logoIFbank from "../../assets/minilogo.png"
import fotoPerfilExample from "../../assets/fotoPerfil.png"

const ProfilePage = () => {
	const theme = useContext(ThemeContext)

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			enabled
		>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				keyboardShouldPersistTaps="handled"
			>
				<Container>
					<GenericHeader>
						<TextHeader>
							Perfil 
						</TextHeader>
						<Image source={logoIFbank} />
					</GenericHeader>

					<ImageContainer>
						<View>
							<Image source={fotoPerfilExample}/>
							<IconStyled name="add-circle-outline" size={38} color="#000"/>	
						</View>
						
					</ImageContainer>

					<Form>
						
						<Input 
							name='nickname' headerText="Apelido" 
						/>	
						<Input 
							name='email' 
							headerText="E-mail" 
						/>	
						<Input 
							name='password' 
							headerText="Senha" 
						/>	
						<Input 
							name='password-confirm' 
							headerText="Confirme a senha" 
							secureTextEntry={true} 
						/>	

						<ButtonContainer>
							<Button 
								fontSize={20}
								theme={theme} 
								iconName="logout"
								iconSize={40}
								iconColor={"#FFF"}
							>
								Sair
							</Button>	
						</ButtonContainer>

						
					</Form>

				</Container>				
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default ProfilePage
