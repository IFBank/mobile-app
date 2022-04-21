import React, { useContext } from "react";

import { View } from 'react-native';

import { ThemeContext } from '../../themes.ts'

import LeadingText from '../LeadingText'
import GenericButton from '../Button'

import { Container, Title, VencimentoText, VencimentoDate, TotalOrderContainer} from "./styles"

interface BoxContainerProps {
	children: any;
	gradientColor: string;
	outerStyle? : any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({comboName, comboItems}) => {

	const theme = useContext(ThemeContext);

	let total = 0.00;

	comboItems.forEach( ({amount, item: {price}}) => {total += amount*price} )


	return (
		<Container outerStyle={{margin: 16, marginLeft: 0, marginTop: 0}} gradientColor="white">
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
