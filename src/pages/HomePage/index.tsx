import React, {useContext, useEffect, useState}from "react";

import useSWR from 'swr'
import { apiIFBANK } from '../../services/api'

import { ScrollView, Image, View, FlatList } from "react-native";

import { useNavigation } from '@react-navigation/native';

import HomeHeader from '../../components/HomeHeader';

import HideSaldoButton from '../../components/HideSaldoButton';
import BoxSaldo from '../../components/BoxSaldo';
import BoxHomeEmpty from '../../components/BoxHomeEmpty';

import BoxPedido from '../../components/BoxPedido';
import BoxCombo from '../../components/BoxCombo';

import useCacheState from '../../hooks/useCacheState';

import { ThemeContext } from '../../themes'

import { Container, ContentSection, TitleHeaderStyled } from "./styles"

import imageEmptyCombos from "../../assets/imageEmptyCombos.png"
import imageEmptyPedidos from "../../assets/imageEmptyPedidos.png"

const fetcher = url => apiIFBANK.get(url).then(res => res.data)

const HomePage: React.FC = () => {
	const navigation = useNavigation();
	const theme = useContext(ThemeContext)

	const { data: dataPedidos, error: errorPedidos} = useSWR('/order/list', fetcher)
	const { data: dataCombo, error: errorCombo} = useSWR('/combo/list', fetcher)

	const [showComboList, setShowComboList] =  useState(true);
	const [showPedidoList, setShowPedidoList] =  useState(true);

	// TODO: Renderização condicional para o flat list

	const renderItemCombo = ({item}) => (
		<BoxCombo comboName={item.name} comboItems={item.combos_item} />
	)

	const renderItemPedido = ({item}) => {

		const value = item.order_item.map( ({amount, item:{price}}) => {
			return amount*price;
		}).reduce( (value, obj) => (obj+value), 0)

		return (<BoxPedido orderName={item.name} value={value} endDate={item.withdraw_date}/>)
	}

	useEffect(() => {

		if(dataPedidos == undefined){
			setShowPedidoList(true)
			return;
		}

		if(Array.isArray(dataPedidos)){
			if (dataPedidos.length == 0) {
				setShowPedidoList(true)
				return;
			}
			setShowPedidoList(false);
			return;
		}

	}, [dataPedidos])

	useEffect(() => {
		if(dataCombo == undefined){
			setShowComboList(true)
			return;
		}

		if(Array.isArray(dataCombo)){
			if (dataCombo.length == 0) {
				setShowComboList(true)
				return;
			}
			setShowComboList(false);
			return;
		}	
	}, [dataCombo])

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }} >
			<Container style={{flex: 1}}>
				<HomeHeader />

				<ContentSection>
					<TitleHeaderStyled mainTitle="Conta" subTitle="Para mais informações vá à aba dashboard."/>

					<HideSaldoButton/>

					<BoxSaldo/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Combos Salvos" 
						subTitle="Encontre seus pedidos salvos e facilite seu processo de compra."
					/>

					{
					showComboList ? (<BoxHomeEmpty 
						imageSource={imageEmptyCombos} 
						mainText="Sem combos registrados!" 
						subTitleText="Você pode registrá-los na finalização de seus pedidos!"
						buttonText="Montar um combo"
						gradientColor="secondary"
						typeOfEmpty="combos"
						onButtonPress={ () => {
							navigation.navigate("Shop");

						}}
					/>): (<FlatList horizontal={true} data={dataCombo}
							renderItem={renderItemCombo}
							keyExtractor={item => item.name}
						/>)
					}

					
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Pedidos pendentes" 
						subTitle="Fique atento aos pedidos feitos, você terá um limite de tempo para recebê-los!"
					/>

					{

					showPedidoList ? (<BoxHomeEmpty 
						imageSource={imageEmptyPedidos} 
						mainText="Sem pedidos pendentes!" 
						subTitleText="Vá a aba cantina e faça o seu!"
						buttonText="Fazer um pedido"
						typeOfEmpty="pedidos"

						onButtonPress={ () => {
							navigation.navigate("Shop");
						}}
					/>): (<FlatList horizontal={true} data={dataPedidos}
							renderItem={renderItemPedido}
							keyExtractor={item => item.name}
						/>)
					}

					
				</ContentSection>


			</Container>
		</ScrollView>	
	)
}

export default HomePage;
