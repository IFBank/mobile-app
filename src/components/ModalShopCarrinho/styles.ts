import styled from "styled-components";

import BoxContainer from '../BoxContainer';
import GenericButton from '../Button';
import Icon from "react-native-vector-icons/MaterialIcons"

const ActionButton = styled(GenericButton)`
	padding: 10px 0px;
	flex-grow: 1;
	border-radius: 10px;
`;

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
    font-family: "Montserrat-Bold";
	font-size: 20px;

	margin-bottom: 32px;
`;

export const ItemsConteiner = styled.ScrollView`
	margin-bottom: 30px;
`;

export const ActionButtonsContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	margin-top: 40px;
	margin-bottom: 30px;
`

export const ClearButton = styled(ActionButton)`
	background-color: #FF1F26;
`;

export const ComboButton = styled(ActionButton)`
	background-color: #32A041;
`;

export const MakeOrderButton = styled(GenericButton)`
	background-color: #32A041;
	padding: 12px 112px;
	border-radius: 10px;
`;