import React from "react";

import { Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

import PaymentTypeBox from '../../../components/PaymentTypeBox';

import { Container } from '../styles'
import { TopBackButtomStyled, TitleHeaderStyled, ImageContainer, SelectContainer } from './styles'

import paymentCartaoGray from '../../../assets/paymentCartaoGray.png';

const SelectPaymentTypePage: React.FC = () => {

	const navigation = useNavigation();

	return (
		<Container>
			<TopBackButtomStyled />

			<ImageContainer>
				<Image source={paymentCartaoGray} />			
			</ImageContainer>

			<TitleHeaderStyled 
				mainTitle="Forma de pagamento" 
				subTitle="Escolha a forma de pagamento para realizar um depósito nesta conta. "
			/>
			<SelectContainer >
				<PaymentTypeBox 
					iconName="pix" 
					mainTitle="Pix" 
					subTitle="Prático e instantâneo"
					onPress={() => {navigation.navigate("Pix")}}
				/>

				<PaymentTypeBox 
					iconName="receipt" 
					mainTitle="Boleto" 
					subTitle="Pague em até 3x"
					onPress={() => {navigation.navigate("Boleto")}}
					style={{marginTop: 32}}
				/>
			</SelectContainer>

		</Container>
	)
}

export default SelectPaymentTypePage;
