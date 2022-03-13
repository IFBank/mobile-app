import React, {useState, useCallback, useContext} from 'react';

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../themes';

import { Container, ModalContainer, CloseIcon, ItemContainer, ItemImage, ItemText, QuantContainer, QuantiText, QuantButtonsContainer, QuantiButtonPlus, QuantuNumberText, QuantiButtonMinus, Button} from "./styles";

const ModalItemQuant: React.FC = ({ onRequestClose, modalVisible }) => {
	const theme = useContext(ThemeContext);

	const [value, setValue] = useState(0)

	const updateLessQuant = useCallback(() => {
		if(value != 0){
			setValue(value - 1)
		}
			
	}, [value]);

	const updateMoreQuant = useCallback(() => {
		setValue(value + 1)
	}, [value]);

	// TODO: Linear bg

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
						<ItemText textColor={theme.linear.primary[0]}>
							Suco de Laranja 250mL
						</ItemText>
					</ItemContainer>

					<QuantContainer>
						<QuantiText>
							Quantidade:
						</QuantiText>


						<QuantButtonsContainer>
				
							<QuantiButtonMinus bgColor={theme.linear.semantic_red[0]} onPress={updateLessQuant} >
								<Icon name="remove" size={20} color="#fff"/>
							</QuantiButtonMinus>

							<QuantuNumberText>{value}</QuantuNumberText>

							<QuantiButtonPlus bgColor={theme.linear.primary[0]} onPress={updateMoreQuant} >
								<Icon name="add" size={20} color="#fff" />
							</QuantiButtonPlus>

						</QuantButtonsContainer>

					</QuantContainer>

					<Button 
						text="Adicionar"
						textFontSize={14}
						innerStyle={{
							paddingVertical: 6,
							paddingHorizontal: 18
						}}

						onPress={() => {}}
					/>
					
				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalItemQuant;