import React, {useState, useContext, useEffect} from 'react';

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"

import { ThemeContext } from '../../themes';

import LeadingText from '../LeadingText'

import { Container, ModalContainer, CloseIcon, PedidoTitle, PedidoInfoText, PedidoInfo} from "./styles";

const ModalInfoPedido: React.FC = ({ onRequestClose, modalVisible, orderSelect }) => {

	if(orderSelect == null) return null;

	const theme = useContext(ThemeContext);

	const [total, setTotal] = useState(0);

	// TODO: Deixar os dados dinamicos
	useEffect(() => {

		if(orderSelect == null) return;

		const totalValue = orderSelect.order.order_item.map( ({amount, item:{price}}) => {
			return amount*price;
		}).reduce( (value, obj) => (obj+value), 0)

		setTotal(totalValue);

	}, [orderSelect])

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<Container>
				<ModalContainer gradientColor={orderSelect.retired_date ? "primary" : "semantic_red"}>
					<CloseIcon>
						<Icon onPress={onRequestClose} name="close" size={20} color="#000"/>
					</CloseIcon>
					<PedidoTitle textColor={orderSelect.retired_date ? theme.linear.primary[0] : theme.linear.semantic_red[0]}>
						{`PEDIDO ${orderSelect.order.name}`}
					</PedidoTitle>

					
					{
						orderSelect.order.order_item.map( (item, key) => {
							console.log(item)
							const value = item.amount * item.item.price;
							return (<LeadingText key={key} textName={item.item.name} textValue={`R$ ${value}`} integerValue={value}/>)	
						})
						
					}

					<LeadingText textName="Valor" textValue={`R$ ${total}`} integerValue={total} valueColor={theme.linear.primary[0]}/>

					<PedidoInfoText textColor={theme.text.text}>
						Data: <PedidoInfo textColor={theme.text.text}>{orderSelect.retired_date}</PedidoInfo>
					</PedidoInfoText>

					<PedidoInfoText textColor={theme.text.text}>
						Status: <PedidoInfo textColor={orderSelect.retired_date ? theme.linear.primary[0] : theme.linear.semantic_red[0]}>{"A ser implementado"}</PedidoInfo>
					</PedidoInfoText>
				</ModalContainer>
			</Container>
		</Modal>
	);

}

export default ModalInfoPedido;