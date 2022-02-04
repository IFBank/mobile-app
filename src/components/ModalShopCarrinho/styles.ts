import styled from "styled-components";

import BoxContainer from '../BoxContainer';
import Icon from "react-native-vector-icons/MaterialIcons"

export const Container = styled.View`
	position: absolute;

	width: 100%;
	height: 100%;

	padding-top: 60px;

	justify-content: center;
	align-items: center;

	background-color: #0004;
`;

export const ModalContainer = styled.View`
	padding: 24px 16px;
	background-color: #fff;
	width: 100%;
	height: 100%;
	align-items: center;

	border-top-left-radius: 36px;
	border-top-right-radius: 36px;
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

export const ModalTitle = styled.Text`
	color: #000;
    font-family: "Montserrat-Bold";
	font-size: 20px;

	margin-bottom: 32px;
`;

export const ItemsConteiner = styled.View``;

export const ItemContainer = styled(BoxContainer)`
	padding: 12px 16px;

	width: 100%;

	align-items: center;

	margin-bottom: 14px;
`;

export const ItemTitle = styled.Text`
	color: #000;
    font-family: "Montserrat-SemiBold";
	font-size: 18px;
`;

export const ItemContentContainer = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`;

export const ItemImage = styled.Image`
	background-color: black;
	width: 110px;
	height: 76px;
	border-radius: 10px;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	flex-shrink: 1;
	justify-content: center;
`;

export const InfoName = styled.Text`
	font-size: 18px;
	color: #000;
    font-family: "Montserrat-SemiBold"
`;

export const InfoValue = styled.Text`
	font-size: 18px;
	color: #000;
    font-family: "Montserrat-Regular"
`;

export const DeleteButton = styled.View`
	background-color: #FF1F26;
	border-radius: 5px;
	height: 50px;
	width: 50px;

	justify-content: center;
	align-items: center;
`;
