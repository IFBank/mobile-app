import React from "react";

import { ScrollView, Image, View } from "react-native";

import BoxSaldo from '../../components/BoxSaldo';

import { Container, ContentSection, SectionTitle, SectionParagraph } from "./styles"

const HomePage: React.FC = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
			<Container style={{flex: 1}}>

					<ContentSection>
						<SectionTitle>Conta</SectionTitle>
						<SectionParagraph>Para mais informações vá à aba dashboard.</SectionParagraph>

						<BoxSaldo>
							
						</BoxSaldo>

					</ContentSection>

					<ContentSection>
						<SectionTitle>Combos Salvos</SectionTitle>
						<SectionParagraph>Encontre seus pedidos salvos e facilite seu processo de compra. </SectionParagraph>

						<BoxSaldo>
							
						</BoxSaldo>

					</ContentSection>

					<ContentSection>
						<SectionTitle>Pedidos pendentes</SectionTitle>
						<SectionParagraph>
							Fique atento aos pedidos feitos, você terá um limite de tempo para recebê-los!
						</SectionParagraph>

						<BoxSaldo>
							
						</BoxSaldo>

					</ContentSection>


			</Container>
		</ScrollView>	
	)
}

export default HomePage;
