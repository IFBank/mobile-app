import styled from 'styled-components/native';

import GenericButton from '../../components/Button';
import GenericInput from '../../components/Input';

import LinearGradient from 'react-native-linear-gradient';

import {fonts} from '../../fonts'

export const Container = styled(LinearGradient)`
	flex: 1;
	padding: 6px 32px;

	align-items: center;
	justify-content: space-around;
`;

export const LogoContainer = styled.View`
	align-items: center;
	justify-content: center;
`;

export const ContentContainer = styled.View`
	width: 100%;
	padding: 16px 0px;

	background-color: ${({theme}) => theme.background}

	border-radius: 10px;
`;

export const Title = styled.Text`
	font-family: ${fonts.title.bold};

	font-size: 24px;
	text-align: center;
	color: ${({theme}) => theme.text.title};
`;

export const Button = styled(GenericButton)`
	margin: 0 30px;
	margin-top: 16px;
`;

export const Input = styled(GenericInput)`
	margin: 0 16px
	margin-top: 32px;
`;
