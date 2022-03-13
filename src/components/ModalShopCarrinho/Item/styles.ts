import styled from "styled-components";

import BoxContainer from '../../BoxContainer';
import GenericButton from '../../Button';
import Icon from "react-native-vector-icons/MaterialIcons"

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../../fonts'

export const ItemContainer = styled(BoxContainer)`
	padding: 12px 0px;
	align-items: center;
`;

export const ItemTitle = styled.Text`
	color: ${({textColor}) => textColor};
    font-family: ${ fonts.title.medium };
	font-size: 18px;
`;

export const ItemContentContainer = styled.View`
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: space-evenly;
`;

export const ItemImage = styled.Image`
	background-color: black;
	width: 110px;
	height: 76px;
	border-radius: 10px;
`;

export const InfoContainer = styled.View`
	flex-wrap: wrap;
	justify-content: center;
`;

export const InfoUnid = styled.Text`
	font-size: 20px;
	color: ${({textColor}) => textColor};
    font-family: ${ fonts.text.regular };
`;

export const InfoPrice = styled.Text`
	font-size: 20px;
	color: ${({textColor}) => textColor};
    font-family: ${ fonts.text.medium };
`;

export const DeleteButton = styled(LinearGradient)`
	background-color: #FF1F26;
	border-radius: 5px;
	height: 50px;
	width: 50px;

	justify-content: center;
	align-items: center;
`;
