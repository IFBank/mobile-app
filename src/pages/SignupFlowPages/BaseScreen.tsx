import React, { useState, useContext } from "react";
import { ThemeContext } from '../../themes';
import { StageContext } from './stages';

import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

import StepIndicator from 'react-native-step-indicator';

import { Container,StageContainer, StageText, StageCancelButton , TitleHeaderStyled, Input, ArrowNavegatorStyled} from "./styles";

import logoIFbank from "../../assets/minilogo.png"
import {stages} from './stages'

const maxStage = stages.maxStages;

const StageHeader: React.FC = ({stage, theme, navigation}) => {

	const stepIndicatorCustomStyles = {
		stepIndicatorSize: 25,
		currentStepIndicatorSize: 35,
		stepIndicatorLabelFontSize: 0,
		currentStepIndicatorLabelFontSize: 14,
		// stepStrokeWidth: 50,
		stepStrokeCurrentColor: theme.linear.primary[0],
		stepStrokeFinishedColor: theme.linear.primary[0],
		stepIndicatorCurrentColor: theme.linear.primary[0],
	
		stepIndicatorLabelCurrentColor: theme.background,

		stepStrokeUnFinishedColor: theme.semantic_disable,
		separatorUnFinishedColor: theme.semantic_disable,
		stepIndicatorUnFinishedColor: theme.semantic_disable,

		separatorFinishedColor: theme.linear.secondary[0],
		stepIndicatorFinishedColor: theme.linear.secondary[0],
	}


	return (
		<View style={{marginBottom: 32}}>
			<StageContainer>
				<StageText>
					{`${stage-1}/${maxStage} etapas concluídas`}
				</StageText>
				<StageCancelButton
					text="Cancelar" 
					textColor={theme.background}
					textFontSize={14}
					borderRadius={20} 
					innerStyle={{
						paddingHorizontal: 14,
						paddingVertical: 6,
					}}
					gradientColor="semantic_red"

					onPress={
						() => {
							navigation.navigate('InitApp')
						}	
					}
				/>
					
			</StageContainer>
			<StepIndicator 
				currentPosition={stage-1}
				stepCount={maxStage} 
				customStyles={stepIndicatorCustomStyles}
			/>
		</View>
			
	);
}

const BaseScreen: React.FC = ({children=null}) => {
	const theme = useContext(ThemeContext);
	const stage = useContext(StageContext);

	const navigation = useNavigation();

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: theme.background }}
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