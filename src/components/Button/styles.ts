import styled from 'styled-components/native';

import Icon from "react-native-vector-icons/MaterialIcons"
import { RectButton } from "react-native-gesture-handler";

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../fonts'

// FIX: Not responde on modal
export const Container = styled(RectButton)`
    border-radius: ${ ({borderRadius}) => borderRadius }px;

    background-color: white;
`;

export const LinearGradientPadding = styled(LinearGradient)`
	padding: 1px;
	width: 100%;
`;

export const TextView = styled.View`
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const IconStyled = styled(Icon)`
	margin-right: 5px;
`;

export const ButtonText = styled.Text`
	color: ${({textColor}) => textColor};
	font-family: ${ fonts.title.bold };
	font-size: ${ ({textFontSize}) => textFontSize }px;
`;
