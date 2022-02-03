import React, { useCallback, useState } from 'react';

import { ScrollView } from "react-native";

import { FormHandles } from "@unform/core"

import {Container, MenuContainer, ContentContainer,  FormStyled} from './styles'

import SearchBarInput from "../../../components/SearchBarInput"
import TabTopShop from "../../../components/TabTopShop"
import ItemShopBox from "../../../components/ItemShopBox"
import BuyButtonShop from "../../../components/BuyButtonShop"

const ShopPage = () => {
	const [ itemType, setItemType ] = useState('salgados')

	const changeItemType = useCallback((value) => {
		setItemType(value)
	}, [])

	return (
		<Container>
			<MenuContainer>

				<FormStyled>
					<SearchBarInput name="search"/>
				</FormStyled>

				<TabTopShop listenChangePage={changeItemType} />				

			</MenuContainer>

			<ScrollView>
				
			
				<ContentContainer>
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl=""
						onPress={() => {console.log("press")}}
					/>
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl="" 
						greenBox
						onPress={() => {console.log("press")}}
						style={{marginTop: 20}}
					/>
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl=""
						onPress={() => {console.log("press")}}
						style={{marginTop: 20}}

					/>
				</ContentContainer>

			</ScrollView>
		
			<BuyButtonShop onPress={() => {}}/>

		</Container>
	);
}

export default ShopPage;