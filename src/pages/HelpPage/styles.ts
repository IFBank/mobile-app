import styled from 'styled-components/native';

import { fonts } from '../../fonts';

export const Container = styled.View`
	flex: 1;
	paddingTop: 5px;
`;

export const Title = styled.Text`
	width: 100%;
	margin: 12px 0;

	font-family: ${fonts.title.medium};
	font-size: 16px;
	text-align: center;

	color: ${({textColor}) => textColor};
`;
