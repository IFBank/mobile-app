import React from "react";

import { Image } from "react-native"

import PaymentTypeBox from '../../../components/PaymentTypeBox';

import { Container } from '../styles'
import { TopBackButtomStyled, TitleHeaderStyled, ImageContainer, SelectContainer } from './styles'

import paymentCartaoGray from '../../../assets/paymentCartaoGray.png';

const SelectPaymentTypePage: React.FC = () => {

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
					onPress={() => {}}
				/>

				<PaymentTypeBox 
					iconName="receipt" 
					mainTitle="Boleto" 
					subTitle="Pague em até 3x"
					onPress={() => {}}
					style={{marginTop: 32}}
				/>
			</SelectContainer>

		</Container>
	)
}

export default SelectPaymentTypePage;
