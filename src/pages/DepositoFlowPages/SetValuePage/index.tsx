import React, {useState, useRef, useCallback} from "react";

import { Image } from "react-native"

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

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

	const handleLogin = useCallback((data: object) => {
		// TODO: consulta na API e ações necessarias
		console.log(data)
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
				<Form ref={formRef} onSubmit={handleLogin}>
					<PaymentValueInput 
						name="value" 
						headerText="R$" 
						updateIsFilledParent={updateIsFilledParent}
						keyboardType="number-pad"
						returnKeyType= "done"
					/>	
				</Form>
			</FormContainer>

			<ForwardBottomButtonStyled 
				canGoNext={isFilledInput} 
				nextPage={() => {}}
			/>
		</Container>
	)
}

export default SetValuePage;
