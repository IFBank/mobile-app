import styled from "styled-components"

import ButtonGeneric from "../../../components/Button";

import { fonts } from '../../../fonts'

export const Container = styled.View`
	padding: 0px 16px;
	padding-bottom: 36px;
	flex: 1;
`;

export const SectionContainer = styled.View`
	margin-top: 30px;
`;

export const UnderLineTitle = styled.Text`
	color: ${ ({textColor}) => textColor};

	width: 100%;
	text-align: center;

	font-family: ${ fonts.title.bold };
	font-size: 18px;

	padding: 0 11px;
	margin-bottom: 6px;
`;

export const PedidosLeadingConteiner = styled.View`
`;

export const InfoLeadingConteiner = styled.View`
	margin: 0 2px;
`;

export const LimitTimeText = styled.Text`
	font-family: ${ fonts.text.medium };
	font-size: 18px;
	color: ${ ({textColor}) => textColor};
`

export const Button = styled(ButtonGeneric)`
	margin-top: 50px;
`;
