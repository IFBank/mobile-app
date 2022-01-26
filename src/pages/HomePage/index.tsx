import React from "react";

import { ScrollView, Image, View } from "react-native";

import GenericHeader from '../../components/Header';
import BoxSaldo from '../../components/BoxSaldo';

import { Container, PerfilContainer, TextPerfilNormal, TextPerfilName, ContentSection, SectionTitle, SectionParagraph } from "./styles"

import fotoPerfil from "../../assets/miniFotoPerfil.png"
import logoIFBank from "../../assets/miniLogo2.png"

const HomePage: React.FC = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
			<Container style={{flex: 1}}>
				

					<GenericHeader>
						<PerfilContainer>
							<Image source={fotoPerfil}/>
							<View>
								<TextPerfilNormal>
									Ola,  
									<TextPerfilName>
									 {" Exodo Jaffar!"}
									</TextPerfilName>
								</TextPerfilNormal>
								
							</View>
						</PerfilContainer>
						
						<Image source={logoIFBank} style={{marginRight: -18}}/>

					</GenericHeader>

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
