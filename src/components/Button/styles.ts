import styled from 'styled-components/native';

import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
	background-color: #32A041;	
	font-size: 20px;

	padding: 30px 50px;

	margin: 0 13px;
	margin-top: 30px;

	justifuy-content: centter;
	align-items: center;

	border-radius: 10px;

	shadow-color: #000;
    shadow-offset-width: 0;
    shadow-offset-height: 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;

`;

export const ButtonText = styled.Text`
	color: #FFF;
	font-family: "MontserratAlternates-Bold";
`;