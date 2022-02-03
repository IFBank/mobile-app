import styled from "styled-components";

import ButtonGeneric from "../Button";
import Icon from "react-native-vector-icons/MaterialIcons"

const QuantiButton = styled(Icon.Button)`
	border-radius: 5px;
	width: 25px;
	height: 25px;
`;

export const Container = styled.View`
	position: relative;

	padding: 0 16px;

	width: 100%;
	height: 100%;

	justify-content: center;
	align-items: center;

	background-color: #0004;
`;

export const ModalContainer = styled.View`
	width: 100%;
	border-radius: 10px;

	padding: 20px 0px;
	align-items: center;
`;

export const IconStyled = styled(Icon)`
	position: absolute;
	top: 12px;
	right: 12px;

	border-width: 1px;
	border-radius: 50%;
`;

export const ItemContainer = styled.View`
	margin-bottom: 10px;
`;

export const ItemImage = styled.Image`
	background-color: black;
	width: 70px;
	height: 40px;
	margin-right: 10px;
`;

export const ItemText = styled.Text`
	font-family: "Montserrat-SemiBold";
	font-size: 20px;
	color: #32A041;
`
export const QuantContainer = styled.View`
	flex-direction: row;
`;

export const QuantiText = styled.Text`
	font-famil: "Montserrat-Regular";
	font-size: 18px;
	color: #000;
`;

export const QuantButtonsContainer = styled.View`
	margin-left: 10px;
`;

export const QuantiButtonPlus = styled(QuantiButton)`
	background-color: #32A041;
`;

export const QuantuNumberText = styled.Text`
	border-bottom: 2px;
	border-color: #000;

	font-family: "Montserrat-SemiBold";
	font-size: 20px;
	color: #000;
`

export const QuantiButtonMinus = styled(QuantiButton)`
	background-color: #FF1F26;
`;

export const Button = styled(ButtonGeneric)`
	background-color: #32A041;
	border-radius: 10px;
	padding: 6px 18px;
`;
