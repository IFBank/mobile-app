import React from "react";

import { ScrollView, Image, View } from "react-native";

import HomeHeader from '../../components/HomeHeader';

import BoxSaldo from '../../components/BoxSaldo';
import BoxHomeEmpty from '../../components/BoxHomeEmpty';

import { Container, ContentSection, SectionTitle, SectionParagraph } from "./styles"

import imageEmptyCombos from "../../assets/imageEmptyCombos.png"
import imageEmptyPedidos from "../../assets/imageEmptyPedidos.png"

const HomePage: React.FC = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
			<Container style={{flex: 1}}>
				<HomeHeader />

				<ContentSection>
					<SectionTitle>Conta</SectionTitle>
					<SectionParagraph>Para mais informações vá à aba dashboard.</SectionParagraph>

					<BoxSaldo />
				</ContentSection>

				<ContentSection>
					<SectionTitle>Combos Salvos</SectionTitle>
					<SectionParagraph>Encontre seus pedidos salvos e facilite seu processo de compra. </SectionParagraph>

					<BoxHomeEmpty 
						imageSource={imageEmptyCombos} 
						mainText="Sem combos registrados!" 
						subTitleText="Você pode registrá-los na finalização de seus pedidos!"
						typeOfEmpty="combos"
					/>
				</ContentSection>

				<ContentSection>
					<SectionTitle>Pedidos pendentes</SectionTitle>
					<SectionParagraph>
						Fique atento aos pedidos feitos, você terá um limite de tempo para recebê-los!
					</SectionParagraph>

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
