import React, { useContext } from "react";

import { ThemeContext } from '../../themes.ts'

import LeadingText from '../LeadingText'
import GenericButton from '../Button'

import { Container, Title, VencimentoText, VencimentoDate} from "./styles"

interface BoxContainerProps {
	children: any;
	gradientColor: string;
	outerStyle? : any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({depositoName, value, date, method}) => {

	const theme = useContext(ThemeContext);

	return (
		<Container outerStyle={{margin: 16, marginLeft: 0}}>
			<Title>Deposito {depositoName}</Title>
			<LeadingText 
				textName={"Valor"}
				textValue={`R$ ${value}`}
				fontSize={18}
				colorNameText={theme.background} 
				valueColor={theme.background}
			/>

			<VencimentoText>
				Forma de pagamento: <VencimentoDate>{method.toString()}</VencimentoDate>
			</VencimentoText>
			<VencimentoText style={{marginVertical: 6}}>
				Data: <VencimentoDate>{date.toString()}</VencimentoDate>
			</VencimentoText>
			
		</Container>
	)
}

export default BoxContainer;
