import React, { useState, useContext } from "react";
import { ThemeContext } from '../../themes';
import { StageContext } from './stages';

import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

import ArrowNavegator from '../../components/ArrowNavegator';

import { Container,StageContainer, StageText, StageCancelButton , TitleHeaderStyled, Input, ArrowNavegatorStyled} from "./styles";

import logoIFbank from "../../assets/minilogo.png"
import {stages} from './stages'

const maxStage = stages.maxStages;

const StageHeader: React.FC = ({stage, theme, navigation}) => {
	return (
		<StageContainer>
			<StageText>
				{`${stage-1}/${maxStage} etapas concluídas`}
			</StageText>
			<StageCancelButton 
				theme={theme} 
				fontSize={14}
				onPress={
					() => {
						navigation.navigate('InitApp')
					}	
				}
			>
				Cancelar
			</StageCancelButton>
		</StageContainer>
	);
}

const BaseScreen: React.FC = ({children=null}) => {
	const theme = useContext(ThemeContext);
	const stage = useContext(StageContext);

	const navigation = useNavigation();

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
				<Container>

				<StageHeader stage={stage.stageNumber} theme={theme} navigation={navigation}/>

				<TitleHeaderStyled mainTitle={stage.title} subTitle={stage.description}/>

				{children}

				{/*{
					actualStage.inputs.map( (value, key) => {
							const style = {
								marginTop: (key == 0 ? 30 : 46)
							}	

							return (
								<Input { ... value } key={key} style={style}/>
							)
						}
					)
				}*/}
		
				

			</Container>
			<ArrowNavegatorStyled 
					hasBackScreen={stage.hasBackScreen} 
					backPage={
						() => {
							navigation.goBack()
						}
					} 
					nextPage={
						// TODO: Customizar nextPage para o handleSubmit do Form
						() => {
							navigation.navigate(stage.nextPage)
						}
					}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
			
	)
}

export default BaseScreen;