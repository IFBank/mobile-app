import React, { useCallback, useState, useContext, useEffect } from 'react';

import useSWR from 'swr'
import { apiIFBANK } from '../../services/api'

import { ThemeContext } from '../../../themes.ts';

import SearchBarInput from "../../../components/SearchBarInput"
import TabTopShop from "../../../components/TabTopShop"
import ItemShopBox from "../../../components/ItemShopBox"
import BuyButtonShop from "../../../components/BuyButtonShop"

import ModalShopCarrinho from "../../../components/ModalShopCarrinho"
import ModalItemQuant from "../../../components/ModalItemQuant"

import { FormHandles } from "@unform/core"

import {Container, MenuContainer, ContentContainer,  FormStyled} from './styles'

const fetcher = url => apiIFBANK.get(url).then(res => res.data)

const ShopPage = () => {

	const { data, error } = useSWR('/shop/list', fetcher)

	const [ dataFilter, setDataFilter ] = useState([]);
	const [ itemType, setItemType ] = useState('salgados')

	const [ selectItem, setSelectItem ] = useState(null);
	const [ modalItem, setModalItem ] = useState(false)
	const [ modalCarrinho, setModalCarrinho ] = useState(false)

	/*
	 Preciso de alguma forma gerenciar a info em um objeto e guardar ele no cache.
	*/

	useEffect( () => {
		const translateItemType = itemType == 'salgados' ? 'FOOD' : "DRINK";
		let newValue = [];

		try{
			newValue = data.filter( ({ item, amount }) => item.type == translateItemType && amount > 0)
		}catch(e){}

		setDataFilter(newValue);

	}, [itemType, data])

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

	const renderItem = ({item}) = (
		<ItemShopBox 
			nameItem={item.item.name}
			price={item.item.name}
			estoqueValue={item.item.amount}
			imageUrl={item.item.avatar_url}
			onPress={() => { setSelectItem(item); setModalItem(true)}}
		/>
	);

	// TODO: passar dados sobre qual salgado foi clicado
	// TODO: Deixar os dados dinamicos
	return (
		<Container style={{backgroundColor: theme.background}}>
			<ModalItemQuant modalVisible={modalItem} onRequestClose={onRequestCloseItem} selectItem={selectItem} />
			<ModalShopCarrinho modalVisible={modalCarrinho} onRequestClose={onRequestCloseCarrinho} />

			<MenuContainer>

				<FormStyled>
					{/*TODO: Drop shadow no input*/}
					<SearchBarInput name="search"/>
				</FormStyled>

				<TabTopShop listenChangePage={changeItemType} />				

			</MenuContainer>

			<ContentContainer
				data={dataFilter}
				renderItem={renderItem}
				keyExtractor={item => item.item_id}
		    />
		
			<BuyButtonShop onPress={() => {
				setModalCarrinho(true)
			}}/>

		</Container>
	);
}

export default ShopPage;