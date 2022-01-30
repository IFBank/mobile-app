import styled from "styled-components/native"

import Icon from "react-native-vector-icons/MaterialIcons"

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
 	"pix_black_24dp": 59392
};

const CustomIcon = createIconSet(glyphMap, 'pix', 'pix.ttf');

import BoxContainer from '../BoxContainer'

export const Container = styled(BoxContainer)`
	flex-direction: row;

	padding: 11px 13px;

	align-items: center;
`;

export const SendIconContainer = styled.View`
	flex: -1;
	width: 100%;
	flex-direction: row;
	justify-content: flex-end;
`;

export const PaymentIconStyled = styled(Icon)`
	margin-right: 14px;
`;

export const CustomPaymentIconStyled = styled(CustomIcon)`
	margin-right: 14px;
`;
