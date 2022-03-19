import styled from 'styled-components/native';

import { fonts } from '../../../fonts'

import BoxContainer from '../../../components/BoxContainer'
import GenericButton from '../../../components/Button';

export const Container = styled.View`
	flex: 1;
	padding: 0px 16px;
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

export const StyledButton = styled(GenericButton)`
	margin-top: 40px;
`;

export const ItemContainer = styled(BoxContainer)`
	padding: 10px 18px;
`;

export const HeaderItemText = styled.Text`
	font-family: ${fonts.title.medium};
	color: ${ ({textColor}) => textColor};
	font-size: 18px;

	width: 100%;
	text-align: center;
`;

export const ItemContent = styled.View`
	flex-direction: row;
	align-items: center;

	margin-top: 10px;
`;

export const ImageStyled = styled.Image`
	background-color: black;
	width: 112px;
	height: 75px;
	border-radius: 10px;

`

export const InfoContainer = styled.View`
	margin-left: 12px;
`;

export const RegularText = styled.Text`
	font-family: ${fonts.text.regular};
	color: ${ ({textColor}) => textColor};
	font-size: 18px;
`;

