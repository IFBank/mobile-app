import React, {useContext, useEffect, useState} from "react";

import {ThemeContext} from '../../../themes'

import { Image, View } from "react-native"
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialIcons"

import AsyncStorage from '@react-native-async-storage/async-storage';

import PaymentTypeBox from '../../../components/PaymentTypeBox';
import PixKeyFakeInput from '../../../components/PixKeyFakeInput';

import { Container } from '../styles'
import { TopBackButtomStyled, TitleHeaderStyled, PixKeyFakeInputContainer, PixKeyHeader, QrCodeHeaderStyled, QRCodeBox, IconCircle} from './styles'

import qrCodeExample from '../../../assets/qrCodeExample.png';

const PixPage: React.FC = () => {
	const [pixData, setPixData] = useState({
      qrCodeText: "processando... ",
      qrCodeImage: qrCodeExample,
    })

	useEffect( () => {
		AsyncStorage.getItem("pix_data").then( (stringData) => {
			const data = JSON.parse(stringData);

			setPixData(data)
		})
	}, [])

	const navigation = useNavigation();
	const theme = useContext(ThemeContext);
	return (
		<Container>
			<TopBackButtomStyled />

			<TitleHeaderStyled 
				mainTitle="Informações do PIX" 
				subTitle="Utilize a chave PIX ou QR Code fornecidos abaixo para efetuar o depósito."
			/>

			<PixKeyFakeInputContainer>
				<PixKeyHeader
					mainTitle="Chave PIX" 
					subTitle=""
					fontSizeMain={14}
					marginBottomMain={16}
				/>

				<PixKeyFakeInput headerText="Chave PIX" content={pixData.qrCodeText} />
			</PixKeyFakeInputContainer>

				

			<QrCodeHeaderStyled 
				mainTitle="QR Code" 
				subTitle=""
				fontSizeMain={16} 
				marginBottomMain={18}	
			/>

			<QRCodeBox outerStyle={{marginHorizontal: 40}}>
				<Image 
					style={{
						width: 200,
						height: 200
					}}
					source={{uri: `${pixData.qrCodeImage}`}} 
				/>

				<IconCircle circleBgColor={theme.linear.primary[0]}>
					<Icon name="qr-code-scanner" size={40} color="#FFF"/>		
				</IconCircle>
					
			</QRCodeBox>

		</Container>
	)
}

export default PixPage;
