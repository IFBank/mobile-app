import React from 'react';

import { Modal, Text, View} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, ModalContainer, CloseIcon, ModalTitle, ItemsConteiner, ItemContainer, ItemContentContainer, ItemImage, ItemTitle, InfoContainer, InfoName, InfoValue, DeleteButton } from "./styles";

const Item: React.FC = () => {
	return(
		<ItemContainer>
			<ItemTitle> Teste</ItemTitle>	

			<ItemContentContainer>
				<ItemImage />
				<InfoContainer>		
					<InfoName>Quat:<InfoValue> 15</InfoValue>	</InfoName>
				
					<InfoName>Quat:<InfoValue> 15</InfoValue>	</InfoName>
				</InfoContainer>

				<DeleteButton>
					<Icon  size={40} name="delete" color="#fff"/>
				</DeleteButton>

			</ItemContentContainer>

		</ItemContainer>
	)
}

const ModalShopCarrinho: React.FC = ({ onRequestClose, modalVisible }) => {

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ModalContainer>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>
					<ModalTitle>
						Carrinho
					</ModalTitle>

					<ItemsConteiner>
						<Item/>	
					</ItemsConteiner>
					
				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalShopCarrinho;
