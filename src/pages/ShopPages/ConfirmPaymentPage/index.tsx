import React, {useContext, useEffect, useState, useCallback} from "react";

import {ScrollView} from 'react-native';

import BoxContainer from '../../../components/BoxContainer'
import TitleHeader from '../../../components/TitleHeader'
import LeadingText from '../../../components/LeadingText'
import TopBackButton from '../../../components/TopBackButton'

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../../themes';
import useCacheContext from '../../../hooks/useCacheContext';

import {Container, SectionContainer, UnderLineTitle, PedidosLeadingConteiner, InfoLeadingConteiner, LimitTimeText, Button} from "./styles";

const ConfirmPaymentPage: React.Fc = () => {
	const [total, setTotal] = useState(0);

	const { state: itemsShop } = useCacheContext('items_shop');

	const theme = useContext(ThemeContext);

	const navegation =  useNavigation();

	const saldoAtual = 10;

	// TODO: Pegar saldo via API

	/*
	  NÃO SERÁ POSSIVEL FAZER ESSA PAGINA POR ENQUANDO, NECESSARIO DISCUSSÃO
	  - Horario limite aparecendo aqui
	*/

	const onOrderItems = useCallback( ()=> {
		//TODO: api order create
		navegation.navigate("HomeApp");
	}, [itemsShop])

	useEffect( () => {
		let total = 0.00;

		itemsShop.forEach( (item) => {
			total = item.amout * item.price
		}) 

		setTotal(total);

	}, [itemsShop])

	return (
		<ScrollView>
			
		<Container>
			<TopBackButton/>
			<TitleHeader mainTitle="Confirmar pagamento" subTitle="Verifique se as informações abaixo estão corretas." style={{marginTop: 50}}/>

			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title}>Pedido</UnderLineTitle>			

				<BoxContainer style={{paddingVertical: 12, paddingHorizontal: 10, width:"100%"}}>
					<PedidosLeadingConteiner>

					{
						itemsShop.map( (item, index) => {
							const {amout, name, item_id, price} = item;
							mB = index == (itemsShop.lenght - 1) ? 20 : 16

							return (
								<LeadingText textName={`${amout} ${name}`} textValue={`R$ ${price}`}  style={{marginBottom: mB}} key={item_id}/>
							)
						})
					}
				
					</PedidosLeadingConteiner>

					<InfoLeadingConteiner>
						<LeadingText textName="Total" textValue={`R$ ${total}`} valueColor={theme.linear.primary[0]} fontFamilyName="Bold" style={{marginBottom: 16}}/>
						{/*<LimitTimeText textColor={theme.text.text}>Horário limite para retirada: {"10h30min"}</LimitTimeText>*/}
					</InfoLeadingConteiner>
					
				</BoxContainer>
			</SectionContainer>


			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title} >Saldo</UnderLineTitle>			

				<BoxContainer style={{paddingVertical: 12, paddingHorizontal: 10, width:"100%"}}>

					<LeadingText textName="Saldo atual" textValue={`R$ ${saldoAtual}`} style={{marginBottom: 9}}/>
					<LeadingText textName="Saldo apos" textValue={`R$ ${saldoAtual - total}`} />	
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

				onPress={onOrderItems}
			/>
			
		</Container>
		</ScrollView>
	);

}

export default ConfirmPaymentPage