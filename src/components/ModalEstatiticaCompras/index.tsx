import React, {useState, useCallback, useContext} from 'react';

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../themes';

import LeadingText from '../LeadingText'


import { Container, ModalContainer, CloseIcon, ModalTitle,} from "./styles";

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

	// TODO: Deixar os dados dinamicos
	
	const gDia = 10.00;
	const gSemana = 10.00;
	const gMes = 10.00;
	const gTotal = 30.00;

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

					<ModalTitle textColor={theme.linear.primary[0]}>Estatísticas de uso</ModalTitle>
					
					<LeadingText textName="Gastos do dia" textValue={`R$ ${gDia}`} integerValue={gDia} />
					<LeadingText textName="Gastos da semana" textValue={`R$ ${gSemana}`} integerValue={gSemana} />
					<LeadingText textName="Gastos do mes" textValue={`R$ ${gMes}`} integerValue={gMes} />

					<LeadingText style={{marginTop: 12}} textName="Gastos totais" fontFamilyName="Bold" textValue={`R$ ${gTotal}`} integerValue={gTotal} valueColor={theme.linear.primary[0]}/>

				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalItemQuant;