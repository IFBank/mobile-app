import styled from 'styled-components/native';

import Icon from "react-native-vector-icons/MaterialIcons"
import { RectButton } from "react-native-gesture-handler";

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../fonts'

// TODO: DROP SHADOW
export const Container = styled(RectButton)`
	shadow-color: #000;
    shadow-offset-width: 0;
    shadow-offset-height: 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;

    border-radius: ${ ({borderRadius}) => borderRadius }px;

    background-color: white;
`;

export const LinearGradientPadding = styled(LinearGradient)`
	padding: 1px;
	width: 100%;
`;

export const TextView = styled.View`
	justifuy-content: center;
	align-items: center;
	width: 100%;
`;

export const IconStyled = styled(Icon)`
	margin-right: 5px;
`;

export const ButtonText = styled.Text`
	color: ${({textColor}) => textColor};
	font-family: ${ fonts.title.bold };
	font-size: ${ ({textFontSize}) => textFontSize }px;
`;
