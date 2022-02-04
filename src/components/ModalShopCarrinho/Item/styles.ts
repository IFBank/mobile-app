import styled from "styled-components";

import BoxContainer from '../../BoxContainer';
import GenericButton from '../../Button';
import Icon from "react-native-vector-icons/MaterialIcons"

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
