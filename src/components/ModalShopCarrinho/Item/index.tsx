import React from 'react';

import Icon from "react-native-vector-icons/MaterialIcons"

import { ItemContainer, ItemContentContainer, ItemImage, ItemTitle, InfoContainer, InfoName, InfoValue, DeleteButton } from "./styles";

const Item: React.FC = () => {
	return(
		<ItemContainer>
			<ItemTitle> Teste</ItemTitle>	

			<ItemContentContainer>
				<ItemImage />
				<InfoContainer>		
					<InfoName>Quat:<InfoValue> 15</InfoValue>	</InfoName>
				
					<InfoName>Quat:<InfoValue> 15</InfoValue>	</InfoName>
				</InfoContainer>

				<DeleteButton>
					<Icon  size={40} name="delete" color="#fff"/>
				</DeleteButton>

			</ItemContentContainer>

		</ItemContainer>
	)
}

export default Item
