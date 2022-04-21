import React from "react";

import { useNavigation } from '@react-navigation/native';

import useCacheContext from '../../hooks/useCacheContext'

import BoxContainer from '../BoxContainer';

import { LeadingTextStyled, StyledButton} from "./styles"

interface BoxSaldoProps{
	hideSaldo: boolean;
};

const numberToRealString: string = (value: Number, hideSaldo) => {

	if (hideSaldo){
		return "*****"
	}

	let stringValue = value.toString();

	const [integerPart, floatPart] = stringValue.includes('.') ? stringValue.split('.') : [stringValue, '00']

	const realString = floatPart.length == 1 ? `${integerPart},${floatPart}0` : `${integerPart},${floatPart}`

	// TODO: Create and implement hook to know if user has block the view of saldo

	return `R$ ${realString}`
}

const BoxSaldo: React.FC<BoxSaldoProps> = ({ ... rest}) => {
	const navigation = useNavigation();

	const { state: hideSaldo } = useCacheContext('hiddenSaldo');

	const value = !hideSaldo ? 0 : 0.01;

	// TODO: Implement Blur

	return (
		<BoxContainer { ... rest} >
			<LeadingTextStyled fontSize={16} textName="Saldo Atual" textValue={numberToRealString(value, hideSaldo)} integerValue={value}/>

			<StyledButton 
				text="Fazer um deposito"
				textFontSize={14} 
				gradientColor="primary"
				innerStyle={{
					paddingHorizontal: 20,
					paddingVertical: 10
				}}
				onPress={ 
					() => {
						navigation.navigate('Deposito')
					}
				}
			/>
				
		</BoxContainer>
	)
}

export default BoxSaldo;
