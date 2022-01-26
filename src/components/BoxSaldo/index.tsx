import React, { useContext } from "react";

import { ThemeContext } from '../../themes.ts'

import { Container, SaldoContainer, SaldoText, SaldoTextValue, StyledButton} from "./styles"

interface BoxSaldoProps {

}

const BoxSaldo: React.FC<BoxSaldoProps> = ({}) => {

	const theme = useContext(ThemeContext);
	const value = 12;

	return (
		<Container>
			<SaldoContainer>
				<SaldoText>
					Saldo Atual
				</SaldoText>
				<SaldoTextValue isLEQZero={value <= 0 }>
					{`R$ ${value}`}
				</SaldoTextValue>
			</SaldoContainer>

			<StyledButton fontSize={12} theme={theme}>
				Fazer um deposito
			</StyledButton>
		</Container>
	)
}

export default BoxSaldo;
