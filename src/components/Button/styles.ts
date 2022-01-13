import styled from 'styled-components/native';

import Icon from "react-native-vector-icons/MaterialIcons"
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
	margin: 0 13px;
	
	justifuy-content: center;
	align-items: center;

	shadow-color: #000;
    shadow-offset-width: 0;
    shadow-offset-height: 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;

`;

export const IconStyled = styled(Icon)`
	margin-right: 5px;
`;

export const ButtonText = styled.Text`
	color: #FFF;
	font-family: "Montserrat-Bold";
	font-size: ${ ({fontSize=20}) => fontSize }px;
`;
