import React from "react";

import { Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

import { ToastAndroid } from "react-native"

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
					onPress={async () => {
						const stringData = await AsyncStorage.getItem("deposito_data");
						const trueData = JSON.parse(stringData);

						AsyncStorage.removeItem("deposito_data");

						apiIFBANK.post('/deposit/pix', trueData).then( (response) => {
							if(response.status != 200) return;

							AsyncStorage.setItem("pix_data", JSON.stringify(response.data))
								.then( () => navigation.navigate("Pix"));
						});
							
						
					}}
				/>

				<PaymentTypeBox 
					iconName="receipt" 
					mainTitle="Boleto" 
					subTitle="Pague em até 3x"
					gradientColor="secondary"
					onPress={() => {
						ToastAndroid.show("Ainda será implementado! Use PIX!", ToastAndroid.SHORT)
						//navigation.navigate("Boleto")
					}}
					outerStyle={{marginTop: 32}}
				/>
			</SelectContainer>

		</Container>
	)
}

export default SelectPaymentTypePage;
