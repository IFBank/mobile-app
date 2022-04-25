import React, { useContext, useCallback, useState } from "react";

import { View } from 'react-native';

import { ThemeContext } from '../../themes.ts'
import { apiIFBANK } from '../../services/api'

import LeadingText from '../LeadingText'
import GenericButton from '../Button'

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, CloseIcon, Title, VencimentoText, VencimentoDate, TotalOrderContainer} from "./styles"

interface BoxContainerProps {
	children: any;
	gradientColor: string;
	outerStyle? : any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({comboName, comboItems}) => {

	const [saldoAtual, setSaldoAtual] = useState(0)

	apiIFBANK.get('/wallet/money').then( (response) => {
		if(response.status != 200) return;

		setSaldoAtual(response.data.money)
	})

	const theme = useContext(ThemeContext);

	let total = 0.00;

	comboItems.forEach( ({amount, item: {price}}) => {total += amount*price} )

	const onClickClose = useCallback( () => {
		// TODO: Delete combo
	});

	return (
		<Container outerStyle={{margin: 16, marginLeft: 0, marginTop: 0}} gradientColor={ (saldoAtual - total ) >= 0 ? "secondary" : "semantic_red"}>

			<CloseIcon borderColor={theme.background}>
				<Icon onPress={onClickClose} name="close" size={16} color={theme.background}/>
			</CloseIcon>
			<Title>Combo {comboName}</Title>

			<View>
			{
				comboItems.map( (metadata, index) => {
					const { item } = metadata;

					return (
						<LeadingText 
							textName={`${metadata.amount} ${item.name}`}
							textValue={`R$ ${item.price}`}
							fontSize={18}
							colorNameText={theme.background} 
							valueColor={theme.background}
						/>	
					)

				})
			}
							
			</View>

			<TotalOrderContainer>
				<VencimentoDate>Total: <VencimentoText>{`R$ ${total}`}</VencimentoText></VencimentoDate>
				<GenericButton 
					text="Pedir" 
					textColor={theme.linear.secondary[0]} 
					gradientColor="white"

					style={{marginHorizontal: 0, marginVertical: 6}}
					innerStyle={{paddingVertical: 8, paddingHorizontal: 16}}
					/>

			</TotalOrderContainer>

			
		</Container>
	)
}

export default BoxContainer;
