import React, {useState} from 'react';

import { Modal, Text } from "react-native";

import { Container, ModalContainer, IconStyled, ItemContainer, ItemImage, QuantContainer, QuantiText, QuantButtonsContainer, QuantiButtonPlus, QuantuNumberText, QuantiButtonMinus, Button} from "./styles";

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
					<IconStyled onPress={onRequestClose} name="close" size={20} color="#000"/>

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
							<QuantiButtonMinus name="remove" size={20} color="$fff" />

							<QuantuNumberText>
								{value}
							</QuantuNumberText>

							<QuantiButtonPlus name="add" size={20} color="$fff"  />

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