import styled from 'styled-components/native';

import {fonts} from '../../fonts'

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
	width: 100%;
	margin-bottom: 2px;
`;

export const Question = styled(LinearGradient)`
	flex-direction: row;
	padding: 14px;
	align-items: center;

	justify-content: space-around;
`;

export const QuestionText = styled.Text`
	margin-right: 25px;
	color: ${({textColor}) => textColor};
	font-family: ${fonts.text.regular};
`;

export const Resposta = styled.View`
	padding: 14px;
`;

export const RespostaTitle = styled.Text`
	color: ${({textColor}) => textColor};
	font-family: ${fonts.text.semibold};
`;

export const RespostaText = styled.Text`
	color: ${({textColor}) => textColor};
	font-family: ${fonts.text.regular};
`;

