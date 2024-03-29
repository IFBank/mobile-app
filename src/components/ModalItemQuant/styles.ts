import styled from "styled-components";

import ButtonGeneric from "../Button";
import Icon from "react-native-vector-icons/MaterialIcons"

import { fonts } from '../../fonts'

const QuantiButton = styled.Pressable`
	border-radius: 5px;
	width: 25px;
	height: 25px;

	align-items: center;
	justify-content: center;

	background-color: ${({bgColor}) => bgColor} ;
`;

export const Container = styled.View`
	position: relative;

	padding: 0 16px;

	width: 100%;
	height: 100%;

	justify-content: center;
	align-items: center;

	background-color: #00000064;
`;

export const ModalContainer = styled.View`
	width: 100%;
	border-radius: 10px;

	padding: 20px 0px;
	align-items: center;
	background-color: #fff;

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

export const ItemContainer = styled.View`
	margin-bottom: 10px;
	flex-direction: row;
	margin-top: 15px;
`;

export const ItemImage = styled.Image`
	background-color: black;
	width: 70px;
	height: 40px;
	margin-right: 10px;
	border-radius: 10px;

`;

export const ItemText = styled.Text`
	font-family: ${ fonts.text.semibold };
	font-size: 20px;
	color: ${ ({textColor}) => textColor };
	text-align: center;
`
export const QuantContainer = styled.View`
	flex-direction: row;
	margin-bottom: 20px;
`;

export const QuantiText = styled.Text`
	font-family: ${ fonts.text.regular };
	font-size: 18px;
	color: #000;
`;

export const QuantButtonsContainer = styled.View`
	margin-left: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const QuantiButtonPlus = styled(QuantiButton)`
`;

export const QuantuNumberText = styled.Text`
	border-bottom-width: 2px;
	border-bottom-color: #000;

	margin: 0px 10px;

	font-family: ${ fonts.title.regular };
	font-size: 20px;
	color: #000;
`

export const QuantiButtonMinus = styled(QuantiButton)`
`;

export const Button = styled(ButtonGeneric)`
`;
