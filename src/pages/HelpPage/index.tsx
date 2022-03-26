import React, {useContext, useEffect, useState, useCallback}from "react";

import { ScrollView, Image, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import DropShadow from "react-native-drop-shadow";
import { FormHandles } from "@unform/core"

import TabTopHelp from "../../components/TabTopHelp"
import QuestionBox from "../../components/QuestionBox"
import SearchBarInput from "../../components/SearchBarInput"

import TitleHeader from '../../components/TitleHeader';

import { ThemeContext } from '../../themes'

import { Container, Title, FormStyled } from "./styles"

const HelpPage: React.FC = () => {
	const [ viewShow, setViewShow ] = useState('questions')

	const changeView = useCallback((value) => {
		setViewShow(value)
	}, [])

	const theme = useContext(ThemeContext)

	// TODO: Partes dos devs e seu modal

	return (
		<Container style={{backgroundColor: theme.background}}>
			<TabTopHelp listenChangePage={changeView} />				
			<View style={{paddingHorizontal: 16, paddingTop: 16}}>
				<TitleHeader 
					mainTitle={viewShow == 'questions' ? "FAQ - Perguntas frequentes" : 'Sobre os desenvolvedores'}
					subTitle={ viewShow == 'questions' ? "Explore e retire suas dúvidas a respeito do funcionamento do app.":""}
				/>	

			{
				viewShow == 'questions' && 
				<Title textColor={theme.text.title}>
					Como podemos te ajudar?
				</Title>}
			{
				viewShow == 'questions' && 
				<DropShadow
					style={{
						shadowColor: theme.shadow,
						shadowOffset: {
							width: 0,
							height: 4,
						},
						shadowOpacity: 0.75,
						shadowRadius: 4,
					}}
				>
				<View style={{paddingHorizontal: 16, backgroundColor: "#fff", borderRadius: 10}}>
					<FormStyled>
						{/*TODO: Drop shadow no input*/}
						<SearchBarInput name="search"/>
					</FormStyled>
					
					<QuestionBox 
						question="O que acontece se eu não conseguir retirar meu pedido até o horário limite?" 
						resposta="O valor total do pedido será reembolsado com 30% de desconto para compensar a possibilidade de outros estudantes terem adquirido o produto que estava reservado a você."
					/>
				</View>
				</DropShadow>
			}
			</View>
			

			
			{
				viewShow == 'group' &&
				<Title textColor={theme.text.title}>
					TODO: Deves
				</Title>	
			}

		</Container>
	);
}

export default HelpPage;