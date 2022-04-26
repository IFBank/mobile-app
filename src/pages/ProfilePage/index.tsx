import React, { useContext, useCallback, useRef } from "react";
import { ThemeContext } from '../../themes'
import useCacheContext from '../../hooks/useCacheContext'

import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { Container, ImageContainer, Input, ButtonContainer, IconStyled, Button } from "./styles"

import fotoPerfilExample from "../../assets/fotoPerfil.png"

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePage = () => {
	const theme = useContext(ThemeContext)

	const {setCacheState: setAuth} = useCacheContext('auth_token');
	const {state: userData} = useCacheContext('user_data');

	const {state: themeState, setCacheState: setTheme} = useCacheContext('theme');

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

					<Form initialData={userData}>
						
						<Input 
							name='name' headerText="Apelido" 
						/>	
						<Input 
							name='email' 
							headerText="E-mail" 
						/>	
						<Input 
							name='password' 
							headerText="Senha" 
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

								onPress = {
									() => {
										setAuth('');
										AsyncStorage.clear();
									}
								}
							/>
							<Button 
								text={ themeState != 'dark' ? "Noturno":"Claro"}
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

								onPress={() => {
									setTheme(themeState == 'dark' ? "light" : 'dark');
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
