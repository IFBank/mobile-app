import React,{ useContext }from 'react';

import { Modal, Text, ScrollView} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../themes'

import LeadingText from "../LeadingText"
import Item from "./Item"

import { Container, ModalContainer, CloseIcon, ModalTitle, ItemsConteiner, ActionButtonsContainer, ClearButton, ComboButton ,MakeOrderButton } from "./styles";

const ModalShopCarrinho: React.FC = ({ onRequestClose, modalVisible }) => {

	const theme = useContext(ThemeContext);

	const navigation = useNavigation();

	// TODO: Deixar os dados dinamicos

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ScrollView style={{flexGrow: 1, width:"100%"}} contentContainerStyle={{paddingTop: "10%"}}>
					
				<ModalContainer>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>
					<ModalTitle>
						Carrinho
					</ModalTitle>

					<ItemsConteiner>
						<Item/>	
						<Item/>	
					</ItemsConteiner>
					
					<LeadingText fontFamilyName="Bold" textName="Total" textValue="R$ 4,00" integerValue={4} valueColor={theme.linear.primary[0]} />

					<ActionButtonsContainer>
						<ClearButton 
							text="Esvaziar"
							textColor={theme.linear.semantic_red[0]}
							textFontSize={18}
							gradientColor="semantic_red"
							innerStyle={{
								paddingVertical: 10,
								paddingHorizontal: 40,
								backgroundColor: theme.background
							}}
						/>

						<ComboButton 
							text="Montar Combo"
							textColor={theme.linear.secondary[0]}
							textFontSize={18}
							gradientColor="secondary"
							innerStyle={{
								paddingVertical: 10,
								paddingHorizontal: 14,
								backgroundColor: theme.background
							}}

							onPress={ () =>	{
								onRequestClose()
								navigation.navigate("FinishsShopCombo")
							}}
						/>
							
					</ActionButtonsContainer>
					
					<MakeOrderButton 
						text="Pedir"
						textFontSize={24}
						borderRadius={30}
						innerStyle={{
							paddingVertical: 12,
							paddingHorizontal: 118,
						}}

						onPress={ () =>	{
							onRequestClose()
							navigation.navigate("FinishsShopBuy")
						}}
					/>

				</ModalContainer>
				</ScrollView>

			</Container>
		</Modal>
	);

}

export default ModalShopCarrinho;
