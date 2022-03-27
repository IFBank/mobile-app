import styled from "styled-components/native"

import LinearGradient from 'react-native-linear-gradient';

import { Platform } from "react-native";

import {fonts} from '../../fonts';

export const BorderLinearGradient = styled(LinearGradient)`
    border-radius: 10px;
    padding: 1px;

    margin-bottom: 20px;
`;

export const Container = styled.View`
	border-radius: 10px;

    background-color: ${ ({theme}) => theme.background};

    width: auto;
    padding: 12px;
`;

export const ProfileContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ProfileImage = styled.Image`
	width: 50px;
	height: 50px;
	background-color: black;
	border-radius: 50px;

	border-color: ${({colorBorder}) => colorBorder};
	border-width: 1px;
`;

export const TextName = styled.Text`
	font-family: ${fonts.title.medium};
	font-size: 16px;
	color: ${({textColor}) => textColor};

	margin-left: 8px;
`;

export const TextInfoName = styled.Text`
	font-family: ${fonts.text.medium};
	font-size: 16px;
	color: ${({textColor}) => textColor};
`;

export const TextInfo = styled.Text`
	font-family: ${fonts.text.regular};
	font-size: 16px ;
	color: ${({textColor}) => textColor};
`;

export const TextBio = styled.Text`
	font-family: ${fonts.text.regular};
	font-size: 16px;
	color: ${({textColor}) => textColor};

	margin: 8px;
`;

