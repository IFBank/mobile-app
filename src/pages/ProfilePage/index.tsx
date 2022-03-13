import React, { useContext, useCallback, useRef } from "react";
import { ThemeContext } from '../../themes'

import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { Container, ImageContainer, Input, ButtonContainer, IconStyled, Button } from "./styles"

import fotoPerfilExample from "../../assets/fotoPerfil.png"

const ProfilePage = () => {
	const theme = useContext(ThemeContext)

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: theme.background}}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			enabled
		>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				keyboardShouldPersistTaps="handled"
			>
				<Container>

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
								text="Sair"
								textFontSize={20}
								borderRadius={30}
								iconName="logout"
								iconSize={30}
								iconColor={theme.background}
								gradientColor="semantic_red"
								innerStyle={{
									paddingHorizontal: 36,
									paddingVertical: 14,

								}}
							/>
							<Button 
								text="Noturno"
								textFontSize={20}
								textColor={theme.linear.neutral[0]}
								borderRadius={30}
								iconName="brightness-2"
								iconSize={30}
								iconColor={theme.linear.neutral[0]}
								gradientColor="neutral"
								innerStyle={{
									paddingVertical: 14,
									paddingHorizontal: 14,
									backgroundColor: theme.background
								}}
							/>	
						</ButtonContainer>

						
					</Form>

				</Container>				
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default ProfilePage
