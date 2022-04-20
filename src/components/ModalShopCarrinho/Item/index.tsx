import React, {useContext}from 'react';

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../../themes'

import { ItemContainer, ItemContentContainer, ItemImage, ItemTitle, InfoContainer, InfoUnid, InfoPrice, DeleteButton } from "./styles";

const Item: React.FC = ({name, price, amount, avatar_url, item_id, onDelete}) => {
	const theme = useContext(ThemeContext);

	return(
		<ItemContainer
			outerStyle={{
				marginBottom: 14
			}}
		>
			<ItemTitle textColor={theme.text.title}> {name}</ItemTitle>	

			<ItemContentContainer>
				<ItemImage source={avatar_url}/>
				<InfoContainer>		
					<InfoUnid textColor={theme.text.title}>{`${amount} unid.`}</InfoUnid>
					<InfoPrice textColor={theme.text.title}>{`R$ ${price}`}</InfoPrice>
				</InfoContainer>

				<DeleteButton colors={theme.linear.semantic_red} start={{x: 0, y: 0}} end={{x: 1, y: 0}} onPress={onDelete}>
					<Icon  size={40} name="delete" color="#fff"/>
				</DeleteButton>

			</ItemContentContainer>

		</ItemContainer>
	)
}

export default Item
