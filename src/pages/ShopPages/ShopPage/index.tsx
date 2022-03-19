import React, { useCallback, useState, useContext } from 'react';

import { ThemeContext } from '../../../themes.ts';

import { ScrollView } from "react-native";

import SearchBarInput from "../../../components/SearchBarInput"
import TabTopShop from "../../../components/TabTopShop"
import ItemShopBox from "../../../components/ItemShopBox"
import BuyButtonShop from "../../../components/BuyButtonShop"

import ModalShopCarrinho from "../../../components/ModalShopCarrinho"
import ModalItemQuant from "../../../components/ModalItemQuant"

import { FormHandles } from "@unform/core"

import {Container, MenuContainer, ContentContainer,  FormStyled} from './styles'


const ShopPage = () => {
	const [ itemType, setItemType ] = useState('salgados')

	const [ modalItem, setModalItem ] = useState(false)
	const [ modalCarrinho, setModalCarrinho ] = useState(false)

	const onRequestCloseItem = () => {
		setModalItem(!modalItem);
	}
	const onRequestCloseCarrinho = () => {
		setModalCarrinho(!modalCarrinho);
	}

	const changeItemType = useCallback((value) => {
		setItemType(value)
	}, [])

	const theme = useContext(ThemeContext);

	// TODO: passar dados sobre qual salgado foi clicado
	// TODO: Deixar os dados dinamicos
	return (
		<Container style={{backgroundColor: theme.background}}>
			<ModalItemQuant modalVisible={modalItem} onRequestClose={onRequestCloseItem} />
			<ModalShopCarrinho modalVisible={modalCarrinho} onRequestClose={onRequestCloseCarrinho} />

			<MenuContainer>

				<FormStyled>
					{/*TODO: Drop shadow no input*/}
					<SearchBarInput name="search"/>
				</FormStyled>

				<TabTopShop listenChangePage={changeItemType} />				

			</MenuContainer>

			<ScrollView>
				
			
				<ContentContainer>
					{/*TODO: FLAT LIST*/}
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl=""
						onPress={() => {setModalItem(true)}}
					/>
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl="" 
						greenBox
						onPress={() => {setModalItem(true)}}
						outerStyle={{marginTop: 20}}
					/>
					<ItemShopBox 
						nameItem="Jose" 
						price="23" 
						estoqueValue="228" 
						imageUrl=""
						onPress={() => {setModalItem(true)}}
						outerStyle={{marginTop: 20}}

					/>
				</ContentContainer>

			</ScrollView>
		
			<BuyButtonShop onPress={() => {
				setModalCarrinho(true)
			}}/>

		</Container>
	);
}

export default ShopPage;