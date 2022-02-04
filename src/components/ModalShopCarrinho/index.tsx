import React from 'react';

import { Modal, Text, ScrollView} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import LeadingText from "../LeadingText"
import Item from "./Item"

import { Container, ModalContainer, CloseIcon, ModalTitle, ItemsConteiner, ActionButtonsContainer, ClearButton, ComboButton ,MakeOrderButton } from "./styles";

const ModalShopCarrinho: React.FC = ({ onRequestClose, modalVisible }) => {

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ScrollView style={{flexGrow: 1, width:"100%"}} contentContainerStyle={{paddingTop: 60}}>
					
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
					
					<LeadingText fontFamilyName="Bold" textName="Total" textValue="R$ 4,00" integerValue={4} valueColor="#32A041" />

					<ActionButtonsContainer>
						<ClearButton fontSize={18}>
							Esvaziar
						</ClearButton>

						<ComboButton fontSize={18}>
							Montar Combo
						</ComboButton>	
					</ActionButtonsContainer>
					
					<MakeOrderButton fontSize={24}>
						Pedir
					</MakeOrderButton>
				</ModalContainer>
				</ScrollView>

			</Container>
		</Modal>
	);

}

export default ModalShopCarrinho;
