import React, { useContext} from "react";

import { ThemeContext } from '../../themes.ts'
import { useNavigation } from '@react-navigation/native';

import BoxContainer from '../BoxContainer';

import { LeadingTextStyled, StyledButton} from "./styles"

const BoxSaldo: React.FC = () => {
	const navigation = useNavigation();


	const theme = useContext(ThemeContext);
	const value = 12;

	return (
		<BoxContainer>
			<LeadingTextStyled fontSize={16} textName="Saldo Atual" textValue={`R$ ${value}`} integerValue={value}/>

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
