import React, {useState, useRef, useCallback} from "react";

import { Image } from "react-native"

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import TitleHeader from '../../../components/TitleHeader';
import PaymentValueInput from '../../../components/PaymentValueInput';

import { Container } from '../styles'
import { TopBackButtomStyled, ImageContainer, FormContainer, ForwardBottomButtonStyled } from './styles'

import porquinhoSaveMoney from '../../../assets/savingMoney.png';

const SetValuePage: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	
	const [isFilledInput, setIsFilledInput] = useState(false);

	const updateIsFilledParent = useCallback((value) => {
		setIsFilledInput(value)
	}) 

	const navigation = useNavigation();

	const handleFinishedInput = useCallback((data: object) => {
		// TODO: consulta na API e ações necessarias
		AsyncStorage.setItem("deposito_data", JSON.stringify(data));
		// console.log(data)
		navigation.navigate("SelectPaymentType")
	}, [])

	return (
		<Container>
			<TopBackButtomStyled />

			<ImageContainer>
				<Image source={porquinhoSaveMoney} />			
			</ImageContainer>

			<TitleHeader 
				mainTitle="Valor do depósito" 
				subTitle="Digite o valor a ser depositado no saldo desta conta "
			/>
			<FormContainer >
				<Form ref={formRef} onSubmit={handleFinishedInput}>
					<PaymentValueInput 
						name="value" 
						headerText="R$" 
						updateIsFilledParent={updateIsFilledParent}
						onSubmitEditing={() => formRef.current?.submitForm()}
						keyboardType="number-pad"
						returnKeyType= "done"
					/>	
				</Form>
			</FormContainer>

			<ForwardBottomButtonStyled 
				canGoNext={isFilledInput} 
				nextPage={() => formRef.current?.submitForm()}
			/>
		</Container>
	)
}

export default SetValuePage;
