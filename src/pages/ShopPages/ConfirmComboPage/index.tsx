import React, {useRef, useCallback, useContext}from "react";

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { FlatList } from 'react-native'

import TopBackButton from '../../../components/TopBackButton';
import TitleHeader from '../../../components/TitleHeader';
import BoxContainer from '../../../components/BoxContainer';
import Input from '../../../components/Input';

import { ThemeContext } from '../../../themes';
import { apiIFBANK } from '../../../services/api'
import useCacheContext from '../../../hooks/useCacheContext';

import { 
	Container, 
	SectionContainer, 
	UnderLineTitle,

	StyledButton,

	ItemContainer,
	HeaderItemText,
	ItemContent,
	ImageStyled,
	InfoContainer,
	RegularText,
} from "./styles";

const Item: React.FC = ({name, amount, avatar_url, theme}) => {
	return (
		<ItemContainer gradientColor="secondary" outerStyle={{marginBottom: 14}}>
			<HeaderItemText textColor={theme.text.title}>
				{name}
			</HeaderItemText>

			<ItemContent>
				<ImageStyled source={avatar_url}/>

				<InfoContainer>
					<RegularText textColor={theme.text.text}>Quantidade: </RegularText>
					<RegularText textColor={theme.text.text}> {amount} unid.</RegularText>
				</InfoContainer>

			</ItemContent>
		</ItemContainer>
	)
}

// TODO: Scroll view
// TODO: Keyboard avoid view

const ConfirmComboPage: React.Fc = () => {

	const theme = useContext(ThemeContext);

	const formRef = useRef<FormHandles>(null)

	const { state: itemsShop, setCacheState: setItemsShop } = useCacheContext('items_shop');

	const handleSaveCombo = useCallback((data: object) => {

		apiIFBANK.post('/combo/create', data).then( (response) => {
			if(response.status != 200) return;

			const { data: { combo_id } } = response;

			itemsShop.forEach( ({item_id, amount}) => {
				apiIFBANK.post(`/combo/add/${combo_id}`, {item_id, amount} )
			})

			navigation.navigate("Home");	
		})
		
	}, [])

	const renderItem: React.FC = ({item}) => (
		<Item 
			{... item}
			theme={theme}
		/>
	);

	return (
		<Container>
			<TopBackButton />
			<TitleHeader mainTitle="Montar Combo" subTitle="Confira os produtos e dê um nome ao seu combo." style={{marginTop: 50}}/>

			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title}>Pedido</UnderLineTitle>			

				<FlatList 
					data={dataFilter}
					renderItem={renderItem}
					keyExtractor={item => item.item_id}
				/>
			</SectionContainer>
			
			

			<Form ref={formRef} onSubmit={handleSaveCombo}>

				<Input 
					name="name"
					headerText="Insira um nome para o combo."
				/>
				<StyledButton 
					text="Criar Combo"
					textFontSize={24}
					innerStyle={{
						paddingVertical: 14
					}}
					borderRadius={30}
					gradientColor="secondary"
					onPress={
						() => {
							formRef.current?.submitForm()
						}
					}
				/>
			</Form>
		</Container>
	)
}

export default ConfirmComboPage;