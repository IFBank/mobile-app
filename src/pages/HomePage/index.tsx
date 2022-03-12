import React, {useContext, useEffect, useState}from "react";

import { ScrollView, Image, View } from "react-native";

import HomeHeader from '../../components/HomeHeader';

// import HideSaldoButton from '../../components/HideSaldoButton';
import BoxSaldo from '../../components/BoxSaldo';
import BoxHomeEmpty from '../../components/BoxHomeEmpty';

import { ThemeContext } from '../../themes'

import { Container, ContentSection, TitleHeaderStyled } from "./styles"

import imageEmptyCombos from "../../assets/imageEmptyCombos.png"
import imageEmptyPedidos from "../../assets/imageEmptyPedidos.png"

const HomePage: React.FC = () => {

	const [hideSaldo, setHideSaldo] = useState(false);

	useEffect( () => {
		setHideSaldo(false) // Value from asyncStorage (cache)
	}, [])

	const theme = useContext(ThemeContext)

	// TODO: Button of hide saldo
	// TODO: Funçoes do box empty e renderização condicional para o flat list

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }} >
			<Container style={{flex: 1}}>
				<HomeHeader />

				<ContentSection>
					<TitleHeaderStyled mainTitle="Conta" subTitle="Para mais informações vá à aba dashboard."/>

					{/*<HideSaldoButton onPress={() =>{setHideSaldo(!hideSaldo)}}/>*/}

					<BoxSaldo hideSaldo={hideSaldo}/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Combos Salvos" 
						subTitle="Encontre seus pedidos salvos e facilite seu processo de compra."
					/>

					<BoxHomeEmpty 
						imageSource={imageEmptyCombos} 
						mainText="Sem combos registrados!" 
						subTitleText="Você pode registrá-los na finalização de seus pedidos!"
						buttonText="Montar um combo"
						gradientColor="secondary"
						typeOfEmpty="combos"
					/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Pedidos pendentes" 
						subTitle="Fique atento aos pedidos feitos, você terá um limite de tempo para recebê-los!"
					/>

					<BoxHomeEmpty 
						imageSource={imageEmptyPedidos} 
						mainText="Sem pedidos pendentes!" 
						subTitleText="Vá a aba cantina e faça o seu!"
						buttonText="Fazer um pedido"
						typeOfEmpty="pedidos"
					/>
				</ContentSection>


			</Container>
		</ScrollView>	
	)
}

export default HomePage;
