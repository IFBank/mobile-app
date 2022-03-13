import styled from "styled-components/native"

import {fonts} from '../../fonts'

export const Container = styled.View``;

export const Title = styled.Text`
	font-family: ${ fonts.title.bold };
	font-size: ${({fontSize}) => fontSize}px;
	color: ${ ({textColor}) => textColor};

	margin-bottom: ${({marginBottom}) => marginBottom}px;		
`;

export const SubTitle = styled.Text`
	font-family: ${ fonts.text.regular };
	font-size: 12px;
	color: ${ ({textColor}) => textColor};
`;
