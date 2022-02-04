import React from 'react'

import { TouchableOpacity } from "react-native"

import { Container, HeaderItemText, ContentContainer, ImageStyled, BoldText, RegularText, InfoContainer} from './styles'

const ItemShopBox: React.FC = ({nameItem, price, estoqueValue, imageUrl, greenBox=false, onPress, ... rest}) =>{
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<Container greenBox={greenBox} { ... rest }>
				<HeaderItemText greenBox={greenBox}>
					{nameItem}
				</HeaderItemText>

				<ContentContainer>
					<ImageStyled source={imageUrl}/>

					<InfoContainer>
						<BoldText greenBox={greenBox}>
							{`R$ ${price}`}
						</BoldText>

						<RegularText greenBox={greenBox}>
							Estoque:  
							<BoldText greenBox={greenBox}> {estoqueValue} unid.</BoldText>
						</RegularText>
					</InfoContainer>

				</ContentContainer>
			</Container>
		</TouchableOpacity>
			
	);
}

export default ItemShopBox;
