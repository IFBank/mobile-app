import styled from "styled-components";

import ButtonGeneric from "../Button";
import BoxContainer from "../BoxContainer";
import Icon from "react-native-vector-icons/MaterialIcons"

import { fonts } from '../../fonts'

export const Container = styled.View`
	position: relative;

	padding: 0 16px;

	width: 100%;
	height: 100%;

	justify-content: center;
	

	background-color: #00000064;
`;

export const ModalContainer = styled(BoxContainer)`	

	padding: 10px;
	padding-top: 20px;
`;

export const CloseIcon = styled.View`
	position: absolute;
	top: 12px;
	right: 12px;

	border-width: 1px;
	border-radius: 12px;

	align-items: center;
	justify-content: center;
`;

export const PedidoTitle = styled.Text`
	font-family: ${fonts.title.bold};
	font-size: 22px;
	color: ${({textColor}) => textColor};

	width: 100%;
	text-align: center;
`;

export const PedidoInfoText = styled.Text`
	color: ${({textColor}) => textColor};
	font-family: ${fonts.text.regular};
	font-size: 18px;
	
`;

export const PedidoInfo = styled.Text`
	color: ${({textColor}) => textColor};
	
	font-family: ${fonts.text.semibold};
	font-size: 18px;	
`;

