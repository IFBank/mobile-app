import React, {useContext}from 'react';

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../../themes'

import { ItemContainer, ItemContentContainer, ItemImage, ItemTitle, InfoContainer, InfoUnid, InfoPrice, DeleteButton } from "./styles";

const Item: React.FC = () => {
	const theme = useContext(ThemeContext);

	const unidValue = 2;
	const priceValue = 2.5;

	return(
		<ItemContainer
			outerStyle={{
				marginBottom: 14
			}}
		>
			<ItemTitle textColor={theme.text.title}> Teste</ItemTitle>	

			<ItemContentContainer>
				<ItemImage />
				<InfoContainer>		
					<InfoUnid textColor={theme.text.title}>{`${unidValue} unid.`}</InfoUnid>
					<InfoPrice textColor={theme.text.title}>{`R$ ${priceValue}`}</InfoPrice>
				</InfoContainer>

				<DeleteButton colors={theme.linear.semantic_red} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
					<Icon  size={40} name="delete" color="#fff"/>
				</DeleteButton>

			</ItemContentContainer>

		</ItemContainer>
	)
}

export default Item
