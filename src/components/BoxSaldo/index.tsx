import React, { useContext } from "react";

import { ThemeContext } from '../../themes.ts'

import BoxContainer from '../BoxContainer';

import { SaldoContainer, SaldoText, SaldoTextValue, StyledButton} from "./styles"

import DashedLine from 'react-native-dashed-line';

interface BoxSaldoProps {

}

const BoxSaldo: React.FC<BoxSaldoProps> = ({}) => {

	const theme = useContext(ThemeContext);
	const value = 12;

	return (
		<BoxContainer>
			<SaldoContainer>
				<SaldoText>
					Saldo Atual
				</SaldoText>
			
				<DashedLine style={{ flexShrink: 1, marginTop:16, width: "100%"}}/>
				
				<SaldoTextValue isLEQZero={value <= 0 }>
					{`R$ ${value}`}
				</SaldoTextValue>
			</SaldoContainer>

			<StyledButton fontSize={12} theme={theme}>
				Fazer um deposito
			</StyledButton>
		</BoxContainer>
	)
}

export default BoxSaldo;
