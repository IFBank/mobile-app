import React, { useContext} from "react";

import { ThemeContext } from '../../themes.ts'
import { useNavigation } from '@react-navigation/native';

import BoxContainer from '../BoxContainer';

import { LeadingTextStyled, StyledButton} from "./styles"

const numberToRealString: string = (value: Number) => {
	let stringValue = value.toString();

	const [integerPart, floatPart] = stringValue.includes('.') ? stringValue.split('.') : [stringValue, '00']

	const realString = floatPart.length == 1 ? `${integerPart},${floatPart}0` : `${integerPart},${floatPart}`

	return `R$ ${realString}`
}

const BoxSaldo: React.FC = () => {
	const navigation = useNavigation();

	const theme = useContext(ThemeContext);
	const value = 0;

	return (
		<BoxContainer>
			<LeadingTextStyled fontSize={16} textName="Saldo Atual" textValue={numberToRealString(value)} integerValue={value}/>

			<StyledButton 
				fontSize={12} 
				theme={theme} 
				onPress={ 
					() => {
						navigation.navigate('Deposito')
					}
				}
			>
				Fazer um deposito
			</StyledButton>
		</BoxContainer>
	)
}

export default BoxSaldo;
