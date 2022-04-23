import React,{ useContext, useCallback }from 'react';

import { Modal, Text, ScrollView} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../themes'
import useCacheContext from '../../hooks/useCacheContext';

import LeadingText from "../LeadingText"
import ItemShopBox from "./Item"

import { Container, ModalContainer, CloseIcon, ModalTitle, ItemsConteiner, ActionButtonsContainer, ClearButton, ComboButton ,MakeOrderButton } from "./styles";

const ModalShopCarrinho: React.FC = ({ onRequestClose, modalVisible }) => {

	if(!modalVisible ) return null;

	const theme = useContext(ThemeContext);

	const navigation = useNavigation();

	const { state: itemsShop, setCacheState: setItemsShop } = useCacheContext('items_shop');

	// TODO: Deixar os dados dinamicos

	const createDeleteItem = useCallback( (itemId) => {
		return () => {
			setItemsShop( (prevState) => {
				return prevState.filter( (item) => {
					return item_id != itemId
				})
			})
		}
	}, []) 

	const renderItem = ({item}) => (
		<ItemShopBox 
			{... item}
			onDelete={createDeleteItem(item.item_id)}
		/>
	);

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ScrollView style={{flexGrow: 1, width:"100%"}} contentContainerStyle={{position: "relative", bottom: "-10%", paddingVertical: "15%"}}>
					
				<ModalContainer>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>
					<ModalTitle>
						Carrinho
					</ModalTitle>

					<ItemsConteiner
						data={itemsShop}
						renderItem={renderItem}
						keyExtractor={item => item.item_id}
					/>
						
					
					<LeadingText fontFamilyName="Bold" textName="Total" textValue="R$ 4,00" integerValue={4} valueColor={theme.linear.primary[0]} />

					<ActionButtonsContainer>
						<ClearButton 
							text="Esvaziar"
							textColor={theme.linear.semantic_red[0]}
							textFontSize={18}
							gradientColor="semantic_red"
							innerStyle={{
								paddingVertical: 10,
								paddingHorizontal: 40,
								backgroundColor: theme.background
							}}
							onPress={() => { 
								setItemsShop([]); onRequestClose()
							}}
						/>

						<ComboButton 
							text="Montar Combo"
							textColor={theme.linear.secondary[0]}
							textFontSize={18}
							gradientColor="secondary"
							innerStyle={{
								paddingVertical: 10,
								paddingHorizontal: 14,
								backgroundColor: theme.background
							}}

							onPress={ () =>	{
								onRequestClose()
								navigation.navigate("FinishsShopCombo")
							}}
						/>
							
					</ActionButtonsContainer>
					
					<MakeOrderButton 
						text="Pedir"
						textFontSize={24}
						borderRadius={30}
						innerStyle={{
							paddingVertical: 12,
							paddingHorizontal: 118,
						}}

						onPress={ () =>	{
							onRequestClose()
							navigation.navigate("FinishsShopBuy")
						}}
					/>

				</ModalContainer>
				</ScrollView>

			</Container>
		</Modal>
	);

}

export default ModalShopCarrinho;
