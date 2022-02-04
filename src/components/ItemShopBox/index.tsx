import React from 'react'

import { TouchableOpacity } from "react-native"

import { Container, HeaderItemText, ContentContainer, ImageStyled, ValueText, EstoqueValueText, RegularText, InfoContainer} from './styles'

const ItemShopBox: React.FC = ({nameItem, price, estoqueValue, imageUrl, onPress, ... rest}) =>{
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<Container  { ... rest }>
				<HeaderItemText >
					{nameItem}
				</HeaderItemText>

				<ContentContainer>
					<ImageStyled source={imageUrl}/>

					<InfoContainer>
						<ValueText >
							{`R$ ${price}`}
						</ValueText>

						<RegularText >
							Estoque:  
							<EstoqueValueText > {estoqueValue} unid.</EstoqueValueText>
						</RegularText>
					</InfoContainer>

				</ContentContainer>
			</Container>
		</TouchableOpacity>
			
	);
}

export default ItemShopBox;
