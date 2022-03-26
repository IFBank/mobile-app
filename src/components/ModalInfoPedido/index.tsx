import React, {useState, useContext, useEffect} from 'react';

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../themes';

import LeadingText from '../LeadingText'

import { Container, ModalContainer, CloseIcon, PedidoTitle, PedidoInfoText, PedidoInfo} from "./styles";

const ModalInfoPedido: React.FC = ({ onRequestClose, modalVisible, idPedido="teste" }) => {
	const theme = useContext(ThemeContext);

	const [pedidoData, setPedidoData] = useState({isConfirmed: false, items: [{name: "coxinha", price: 10.80}, {name: "coxinha", price: 10.80}], total: 21.60});

	// TODO: Deixar os dados dinamicos
	useEffect(() => {
		// TODO: get pedido data and put on state
	}, [])

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ModalContainer gradientColor={pedidoData.isConfirmed ? "primary" : "semantic_red"}>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>
					<PedidoTitle textColor={pedidoData.isConfirmed ? theme.linear.primary[0] : theme.linear.semantic_red[0]}>
						{"PEDIDO SEI LA"}
					</PedidoTitle>

					
					{
						pedidoData.items.map( (value, key) => {
							return (<LeadingText textName={value.name} textValue={`R$ ${value.price}`} integerValue={value.price}/>)	
						})
						
					}

					<LeadingText textName="Valor" textValue={`R$ ${pedidoData.total}`} integerValue={pedidoData.total} valueColor={theme.linear.primary[0]}/>

					<PedidoInfoText textColor={theme.text.text}>
						Data: <PedidoInfo textColor={theme.text.text}>{"data datosa"}</PedidoInfo>
					</PedidoInfoText>

					<PedidoInfoText textColor={theme.text.text}>
						Status: <PedidoInfo textColor={pedidoData.isConfirmed ? theme.linear.primary[0] : theme.linear.semantic_red[0]}>{"esado dele"}</PedidoInfo>
					</PedidoInfoText>
				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalInfoPedido;