import React, {useContext} from 'react'

import { ThemeContext } from '../../themes.ts';

import { TouchableOpacity } from "react-native"

import { Container, HeaderItemText, ContentContainer, ImageStyled, ValueText, EstoqueValueText, RegularText, InfoContainer} from './styles'

const ItemShopBox: React.FC = ({nameItem, price, estoqueValue, imageUrl, onPress, ... rest}) =>{

	const theme = useContext(ThemeContext);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<Container  { ... rest }>
				<HeaderItemText >
					{nameItem}
				</HeaderItemText>

				<ContentContainer>
					<ImageStyled source={imageUrl}/>

					<InfoContainer>
						<ValueText textColor={theme.linear.primary[0]}>
							{`R$ ${price}`}
						</ValueText>

						<RegularText textColor={theme.text.text}>
							Estoque:  
							<EstoqueValueText textColor={theme.text.text}> {estoqueValue} unid.</EstoqueValueText>
						</RegularText>
					</InfoContainer>

				</ContentContainer>
			</Container>
		</TouchableOpacity>
			
	);
}

export default ItemShopBox;
