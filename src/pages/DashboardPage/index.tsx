import React, {useContext, useEffect, useState}from "react";

import { ToastAndroid } from "react-native"
import { ScrollView, Image, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import BoxSaldo from '../../components/BoxSaldo';
import BoxDashboardEmpty from '../../components/BoxDashboardEmpty';

import { ThemeContext } from '../../themes'

import { Container, ContentSection, TitleHeaderStyled, StyledButton } from "./styles"

import imageEmptyPedidos from "../../assets/emptyCard.png"
import imageEmptyDepositos from "../../assets/questionImage.png"

const DashboardPage: React.FC = () => {
	const navigation = useNavigation();

	const [hideSaldo, setHideSaldo] = useState(false);

	useEffect( () => {
		setHideSaldo(false) // Value from asyncStorage (cache)
	}, [])

	const theme = useContext(ThemeContext)

	// TODO: Renderização condicional para o flat list

	// TODO: Modals

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }} >
			<Container style={{flex: 1}}>

				<ContentSection>

					<BoxSaldo hideSaldo={hideSaldo}/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Histórico de pedidos" 
						marginBottomMain={0}
					/>

					<BoxDashboardEmpty 
						imageSource={imageEmptyPedidos} 
						mainText="Nenhum pedido foi feito ainda!" 
						gradientColor="secondary"
					/>
				</ContentSection>

				<ContentSection>
					<TitleHeaderStyled 
						mainTitle="Histórico de depósitos" 
						marginBottomMain={0}
					/>

					<BoxDashboardEmpty 
						imageSource={imageEmptyDepositos} 
						mainText="Nenhum depósito foi feito ainda!" 
					/>
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

					onPress={() => {}}
				/>

			</Container>
		</ScrollView>	
	)
}

export default DashboardPage;
