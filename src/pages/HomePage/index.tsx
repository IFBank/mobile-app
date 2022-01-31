import React from "react";

import { ScrollView, Image, View } from "react-native";

import HomeHeader from '../../components/HomeHeader';

import BoxSaldo from '../../components/BoxSaldo';
import BoxHomeEmpty from '../../components/BoxHomeEmpty';

import { Container, ContentSection, TitleHeaderStyled } from "./styles"

import imageEmptyCombos from "../../assets/imageEmptyCombos.png"
import imageEmptyPedidos from "../../assets/imageEmptyPedidos.png"

const HomePage: React.FC = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
			<Container style={{flex: 1}}>
				<HomeHeader />

				<ContentSection>
					<TitleHeaderStyled mainTitle="Conta" subTitle="Para mais informações vá à aba dashboard."/>

					<BoxSaldo />
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
						mainText="Sem pedios pendentes!" 
						subTitleText="Vá a aba cantina e faça o seu!"
						typeOfEmpty="pedidos"
					/>
				</ContentSection>


			</Container>
		</ScrollView>	
	)
}

export default HomePage;
