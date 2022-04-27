import React, {useContext, useEffect, useState}from "react";

import { ScrollView, Image, View, FlatList } from "react-native";

import { useNavigation } from '@react-navigation/native';

import BoxSaldo from '../../components/BoxSaldo';
import BoxDashboardEmpty from '../../components/BoxDashboardEmpty';

import ModalEstatiticaCompras from '../../components/ModalEstatiticaCompras';
import ModalInfoPedido from '../../components/ModalInfoPedido';

import BoxPedido from '../../components/BoxPedido';
import BoxDeposito from '../../components/BoxDeposito';

import useSWR from 'swr'
import { apiIFBANK } from '../../services/api'

import { ThemeContext } from '../../themes'

import useCacheState from '../../hooks/useCacheState'

import { Container, ContentSection, TitleHeaderStyled, StyledButton } from "./styles"

import imageEmptyPedidos from "../../assets/emptyCard.png"
import imageEmptyDepositos from "../../assets/questionImage.png"

const fetcher = url => apiIFBANK.get(url).then(res => res.data)


const DashboardPage: React.FC = () => {
	const navigation = useNavigation();

	const [ orderSelect, setOrderSelect ] = useState(null);

	const [ modalPedido, setModalPedido ] = useState(false)
	const [ modalEstatistica, setModalEstatistica ] = useState(false)

	const onRequestClosePedido = () => {
		setModalPedido(!modalPedido);
	}

	const onRequestCloseEsatistica = () => {
		setModalEstatistica(!modalEstatistica);
	}

	const theme = useContext(ThemeContext)

	// TODO: Modals

	const { data: dataPedidos, error: errorPedidos} = useSWR('/order/history', fetcher)
	// const { data: dataDeposito, error: errorDeposito} = useSWR('/order/list', fetcher)
	const dataDeposito = undefined;
	// AINDÃ NÃO TEM API NO BACK END PRA ISSO

	const renderItemPedido = ({item}) => {

		const value = item.order.order_item.map( ({amount, item:{price}}) => {
			return amount*price;
		}).reduce( (value, obj) => (obj+value), 0)

		return (<BoxPedido 
			orderName={item.order.name} 
			value={value} 
			endDate={item.retired_date} 
			onPressButton={() => {
				setOrderSelect(item);
				setModalPedido(true);
			}}/>
		)
	}

	const renderItemDeposito = ({item}) => (
		<BoxDeposito orderName={item.name} value={null} endDate={item.withdraw_date}/>
	)

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }} >
			<Container style={{flex: 1}}>
				<ModalEstatiticaCompras modalVisible={modalEstatistica} onRequestClose={onRequestCloseEsatistica} />
				<ModalInfoPedido modalVisible={modalPedido} onRequestClose={onRequestClosePedido} orderSelect={orderSelect} />

				<ContentSection>

					<BoxSaldo/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Histórico de pedidos" 
						marginBottomMain={0}
					/>

					{!dataPedidos?.length? (<BoxDashboardEmpty 
						imageSource={imageEmptyPedidos} 
						mainText="Nenhum pedido foi feito ainda!" 
						gradientColor="secondary"
					/>):(<FlatList horizontal={true} data={dataPedidos}
							renderItem={renderItemPedido}
							keyExtractor={item => item.name}
						/>)}

				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Histórico de depósitos" 
						marginBottomMain={0}
					/>

					{!dataDeposito?.length ? (<BoxDashboardEmpty 
						imageSource={imageEmptyDepositos} 
						mainText="Nenhum depósito foi feito ainda!" 
					/>) : (<FlatList horizontal={true} data={dataDeposito}
							renderItem={renderItemDeposito}
							keyExtractor={item => item.name}
						/>)}
				</ContentSection>

				<StyledButton 
					text="Ver estatísticas"
					textColor={theme.linear.primary[0]}
					textFontSize={18}

					iconName="bar-chart"
					iconSize={30} 
					iconColor={theme.linear.primary[0]} 

					innerStyle={{
						backgroundColor: theme.background,
						paddingVertical: 5,
					}}

					onPress={() => {
						setModalEstatistica(true);
					}}
				/>

			</Container>
		</ScrollView>	
	)
}

export default DashboardPage;
