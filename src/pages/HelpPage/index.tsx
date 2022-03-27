import React, {useContext, useEffect, useState, useCallback}from "react";

import { KeyboardAvoidingView, ScrollView, Image, View, Platform } from "react-native";

import { useNavigation } from '@react-navigation/native';

import DropShadow from "react-native-drop-shadow";
import { FormHandles } from "@unform/core"

import TabTopHelp from "../../components/TabTopHelp"
import QuestionBox from "../../components/QuestionBox"
import BoxDevs from "../../components/BoxDevs"
import SearchBarInput from "../../components/SearchBarInput"

import TitleHeader from '../../components/TitleHeader';

import { ThemeContext } from '../../themes'

import {asks, devs} from './data';

import { Container, Title, FormStyled } from "./styles"

const HelpPage: React.FC = () => {
	const [ viewShow, setViewShow ] = useState('questions')

	const changeView = useCallback((value) => {
		setViewShow(value)
	}, [])

	const theme = useContext(ThemeContext)

	// TODO: Partes dos devs e seu modal

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
			<Container style={{backgroundColor: theme.background}}>
				<TabTopHelp listenChangePage={changeView} />				
				<View style={{paddingHorizontal: 16, paddingTop: 16}}>
					<TitleHeader 
						marginBottomMain={viewShow == 'questions' ? 9:24}
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
					<View style={{paddingHorizontal: 16, backgroundColor: "#fff", borderRadius: 10, paddingBottom: 12}}>
						<FormStyled>
							{/*TODO: Drop shadow no input*/}
							<SearchBarInput name="search" placeholder="Pesquise palavras-chaves"/>
						</FormStyled>
						{
							asks.map((value, key) => {
								return (
									<QuestionBox { ... value } key={key} />
								)
							})
						}
						
					</View>
					</DropShadow>
				}

				{
					viewShow == 'group' &&
					devs.map( (value, key) => {
						return (
							<BoxDevs { ... value } key={key} />
						)
					})
				}
				</View>
				

				


			</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

export default HelpPage;