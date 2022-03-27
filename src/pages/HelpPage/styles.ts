import styled from 'styled-components/native';

import { fonts } from '../../fonts';

import { Form } from "@unform/mobile"

export const Container = styled.View`
	flex: 1;
	padding-top: 5px;
	padding-bottom: 16px;
`;

export const Title = styled.Text`
	width: 100%;
	margin: 12px 0;

	font-family: ${fonts.title.medium};
	font-size: 16px;
	text-align: center;

	color: ${({textColor}) => textColor};
`;

export const FormStyled = styled(Form)`
	padding: 24px 26px;
	justify-content: center;
`;