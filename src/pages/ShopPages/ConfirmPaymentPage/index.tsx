import React, {useContext} from "react";

import {ScrollView} from 'react-native';

import BoxContainer from '../../../components/BoxContainer'
import TitleHeader from '../../../components/TitleHeader'
import LeadingText from '../../../components/LeadingText'
import TopBackButton from '../../../components/TopBackButton'

import { ThemeContext } from '../../../themes';

import {Container, SectionContainer, UnderLineTitle, PedidosLeadingConteiner, InfoLeadingConteiner, LimitTimeText, Button} from "./styles";

const ConfirmPaymentPage: React.Fc = () => {

	const theme = useContext(ThemeContext);

	// TODO: Deixar os dados dinamicos

	return (
		<ScrollView>
			
		<Container>
			<TopBackButton/>
			<TitleHeader mainTitle="Confirmar pagamento" subTitle="Verifique se as informações abaixo estão corretas." style={{marginTop: 50}}/>

			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title}>Pedido</UnderLineTitle>			

				<BoxContainer style={{paddingVertical: 12, paddingHorizontal: 10, width:"100%"}}>
					<PedidosLeadingConteiner>
						<LeadingText textName="2 Coxinhas de Frango" textValue="R$ 5,00"  style={{marginBottom: 16}}/>
						<LeadingText textName="2 Coxinhas de Coxa" textValue="R$ 5,00" style={{marginBottom: 20}}/>	
					</PedidosLeadingConteiner>

					<InfoLeadingConteiner>
						<LeadingText textName="Total" textValue="R$ 10,00" valueColor={theme.linear.primary[0]} fontFamilyName="Bold" style={{marginBottom: 16}}/>
						<LimitTimeText textColor={theme.text.text}>Horário limite para retirada: {"10h30min"}</LimitTimeText>
					</InfoLeadingConteiner>
					
				</BoxContainer>
			</SectionContainer>


			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title} >Saldo</UnderLineTitle>			

				<BoxContainer style={{paddingVertical: 12, paddingHorizontal: 10, width:"100%"}}>

					<LeadingText textName="Saldo atual" textValue="R$ 10,00" style={{marginBottom: 9}}/>
					<LeadingText textName="Saldo apos" textValue="R$ 0,00" />	
				</BoxContainer>
			</SectionContainer>

			<Button
				text="Finalizar Compra"
				textFontSize={24}
				borderRadius={30}
				innerStyle={{
					paddingVertical: 14,
					paddingHorizontal: 56,
				}}
			/>
			
		</Container>
		</ScrollView>
	);

}

export default ConfirmPaymentPage