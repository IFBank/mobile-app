import React, { useState, useContext } from "react";
import { ThemeContext } from '../../themes';
import { StageContext } from './stages';

import { View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import ArrowNavegator from '../../components/ArrowNavegator';
import GenericHeader from '../../components/Header';

import { Container, TextHeader, StageContainer, StageText, StageCancelButton , Title, SubTitle, Input, ArrowNavegatorStyled} from "./styles";

import logoIFbank from "../../assets/minilogo.png"
import {stages} from './stages'

const maxStage = stages.maxStages;

const StageHeader: React.FC = ({stage, theme, navigation}) => {
	return (
		<StageContainer>
			<StageText>
				{`${stage}/${maxStage} etapas concluídas`}
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
		<Container>
			<GenericHeader>
				<TextHeader>
					Cadastramento 
				</TextHeader>
				<Image source={logoIFbank} />
			</GenericHeader>

			<StageHeader stage={stage.stageNumber} theme={theme} navigation={navigation}/>

			<Title>
				{stage.title}
			</Title>

			<SubTitle>
				{stage.description}
			</SubTitle>	

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
	
			<ArrowNavegatorStyled 
				hasBackScreen={stage.hasBackScreen} 
				backPage={
					() => {
						navigation.goBack()
					}
				} 
				nextPage={
					() => {
						navigation.navigate(stage.nextPage)
					}
				}
			/>

		</Container>
	)
}

export default BaseScreen;