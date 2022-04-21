import styled from "styled-components/native";

import { fonts } from '../../fonts'

import DashedLine from 'react-native-dashed-line';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


// TODO: Refatorar essa merda
export const NameText = styled.Text`
    color: ${ ({colorNameText}) => colorNameText};

    font-family: ${({fontFamilyName}) => `Mukta-${fontFamilyName}`};
    font-size: ${({fontSize=18}) => fontSize}px;
`;

export const ValueText = styled.Text`
    color: ${ ({isLEQZero=false, fontColor}) => isLEQZero ? "#FF1F26" : fontColor};
    font-family: ${fonts.text.medium};
    font-size: ${({fontSize=18}) => fontSize}px;
`;

export const DashedLineStyled = styled(DashedLine)`
	flex-shrink: 1;
	margin-top: ${({fontSize=16}) => fontSize}px; 
	width: 100%;

	padding: 0 4px;
`;
