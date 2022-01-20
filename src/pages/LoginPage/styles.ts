import styled from 'styled-components/native';

import GenericButton from '../../components/Button';
import GenericInput from '../../components/Input';

export const Container = styled.View`
	flex: 1;

	align-items: center;
`;

export const LogoContainer = styled.View`
	height: 40%;
	width: 100%;

	background-color: #32A041;

	border-bottom-right-radius: 10px; 
	border-bottom-left-radius: 10px; 
	
	shadow-color: #000;
    shadow-offset-width: 4px;
    shadow-offset-height: 4px;
    shadow-opacity: 0.5;
    shadow-radius: 4px;
    elevation: 4;

	align-items: center;
	justify-content: center;
`;

export const ContentContainer = styled.View`
	width: 100%;
`;

export const Title = styled.Text`
	margin-top: 40px;

	font-family: "Montserrat-Bold";

	font-size: 24px;
	text-align: center;
	color: #000000;

	width: 87px;

	border-bottom-width: 2px;
	border-bottom-color: #000;

`

export const Button = styled(GenericButton)`
	background-color: #32A041;
	padding: 12px 0px;
	margin: 0 32px;
	margin-top: 50px;
	border-radius: 20px;
`;

export const Input = styled(GenericInput)`
	margin: 0 16px
	margin-top: 32px;
`;
