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

const BoxContainer: React.FC<BoxContainerProps> = ({orderName, value, endDate}) => {

	const theme = useContext(ThemeContext);

	return (
		<Container outerStyle={{margin: 16, marginLeft: 0}}>
			<Title>Pedido {orderName}</Title>
			<LeadingText 
				textName={"Valor"}
				textValue={`R$ ${value}`}
				fontSize={18}
				colorNameText={theme.background} 
				valueColor={theme.background}
			/>

			<VencimentoText>
				Vencimento: <VencimentoDate>{endDate.toString()}</VencimentoDate>
			</VencimentoText>

			<GenericButton 
				text="Mais informações" 
				textColor={theme.linear.primary[0]} 
				iconName="info" iconSize={20} 
				iconColor={theme.linear.primary[0]} 
				gradientColor="white"

				style={{marginHorizontal: 36, marginVertical: 6}}
				innerStyle={{paddingVertical: 6}}
				/>
		</Container>
	)
}

export default BoxContainer;
