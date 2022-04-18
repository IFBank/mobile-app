import React from "react";

import { Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

import PaymentTypeBox from '../../../components/PaymentTypeBox';

import {apiIFBANK} from '../../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
					onPress={() => {
						AsyncStorage.getItem("deposito_data").then( (data) => {
							apiIFBANK.post('/deposit/pix', {data: data}).then( (response) => {
								if(response.status != 200) return;

								AsyncStorage.setItem("pix_data", response.data).then( () => navigation.navigate("Pix"));
							});
							AsyncStorage.removeItem("deposito_data");
						})
						
					}}
				/>

				<PaymentTypeBox 
					iconName="receipt" 
					mainTitle="Boleto" 
					subTitle="Pague em até 3x"
					gradientColor="secondary"
					onPress={() => {navigation.navigate("Boleto")}}
					outerStyle={{marginTop: 32}}
				/>
			</SelectContainer>

		</Container>
	)
}

export default SelectPaymentTypePage;
