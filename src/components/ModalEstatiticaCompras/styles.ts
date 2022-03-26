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
	padding: 24px 12px;
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
	font-family: ${fonts.title.bold};
	font-size: 22px;
	color: ${({textColor}) => textColor};

	width: 100%;
	text-align: center;

	margin-bottom: 12px;
`;

