import React from "react";

import { useNavigation } from '@react-navigation/native';

import BoxContainer from '../BoxContainer';

import { LeadingTextStyled, StyledButton} from "./styles"

interface BoxSaldoProps{
	hideSaldo: boolean;
};

const numberToRealString: string = (value: Number) => {
	let stringValue = value.toString();

	const [integerPart, floatPart] = stringValue.includes('.') ? stringValue.split('.') : [stringValue, '00']

	const realString = floatPart.length == 1 ? `${integerPart},${floatPart}0` : `${integerPart},${floatPart}`

	// TODO: Create and implement hook to know if user has block the view of saldo

	return `R$ ${realString}`
}

const BoxSaldo: React.FC<BoxSaldoProps> = ({ hideSaldo, ... rest}) => {
	const navigation = useNavigation();

	const value = 0;

	return (
		<BoxContainer { ... rest} >
			<LeadingTextStyled fontSize={16} textName="Saldo Atual" textValue={numberToRealString(value)} integerValue={value}/>

			<StyledButton 
				text="Fazer um deposito"
				textFontSize={12} 
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
