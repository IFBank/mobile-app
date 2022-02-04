import React, {useState} from 'react';

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, ModalContainer, CloseIcon, ItemContainer, ItemImage, ItemText, QuantContainer, QuantiText, QuantButtonsContainer, QuantiButtonPlus, QuantuNumberText, QuantiButtonMinus, Button} from "./styles";

const ModalItemQuant: React.FC = ({ onRequestClose, modalVisible }) => {

	const [value, setValue] = useState(0)

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ModalContainer>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>

					<ItemContainer>
						<ItemImage />
						<ItemText>
							Suco de Laranja 250mL
						</ItemText>
					</ItemContainer>

					<QuantContainer>
						<QuantiText>
							Quantidade:
						</QuantiText>


						<QuantButtonsContainer>
				
							<QuantiButtonMinus>
								<Icon name="remove" size={20} color="#fff"/>
							</QuantiButtonMinus>

							<QuantuNumberText>{value}</QuantuNumberText>

							<QuantiButtonPlus>
								<Icon name="add" size={20} color="#fff" />
							</QuantiButtonPlus>

						</QuantButtonsContainer>

					</QuantContainer>

					<Button fontSize={14}>
						Adicionar
					</Button>
				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalItemQuant;