import styled from "styled-components";

import BoxContainer from '../BoxContainer';
import GenericButton from '../Button';
import Icon from "react-native-vector-icons/MaterialIcons"

import { fonts } from '../../fonts'

export const Container = styled.View`
	position: absolute;

	width: 100%;
	height: 100%;

	justify-content: center;
	align-items: center;

	background-color: #00000064;
`;

export const ModalContainer = styled.View`
	padding: 24px 16px;
	background-color: #fff;
	width: 100%;
	height: 100%;
	align-items: center;

	border-top-left-radius: 26px;
	border-top-right-radius: 26px;
`;

export const CloseIcon = styled.View`
	position: absolute;
	top: 15px;
	right: 20px;

	border-width: 1px;
	border-radius: 12px;

	align-items: center;
	justify-content: center;
`;

export const ModalTitle = styled.Text`
	color: #000;
    font-family: ${ fonts.title.bold };
	font-size: 22px;

	margin-bottom: 32px;
`;

export const ItemsConteiner = styled.FlatList`
	margin-bottom: 30px;
`;

export const ActionButtonsContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 30px;
`

export const ClearButton = styled(GenericButton)`
`;

export const ComboButton = styled(GenericButton)`
`;

export const MakeOrderButton = styled(GenericButton)`
`;