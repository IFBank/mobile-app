import React from "react";

import { Image, View } from "react-native"
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialIcons"

import PaymentTypeBox from '../../../components/PaymentTypeBox';
import PixKeyFakeInput from '../../../components/PixKeyFakeInput';

import { Container } from '../styles'
import { TopBackButtomStyled, TitleHeaderStyled, PixKeyFakeInputContainer, PixKeyHeader, QrCodeHeaderStyled, QRCodeBox, IconCircle} from './styles'

import qrCodeExample from '../../../assets/qrCodeExample.png';

const PixPage: React.FC = () => {

	const navigation = useNavigation();

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

				<PixKeyFakeInput headerText="Chave PIX" content="41226f99-2f4f-486d-b515-b0" />
			</PixKeyFakeInputContainer>

				

			<QrCodeHeaderStyled 
				mainTitle="QR Code" 
				subTitle=""
				fontSizeMain={14} 
				marginBottomMain={18}	
			/>

			<QRCodeBox>
				<Image source={qrCodeExample} />

				<IconCircle>
					<Icon name="qr-code-scanner" size={40} color="#FFF"/>		
				</IconCircle>
					
			</QRCodeBox>

		</Container>
	)
}

export default PixPage;
