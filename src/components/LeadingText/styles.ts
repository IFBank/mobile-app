import styled from "styled-components/native";

import DashedLine from 'react-native-dashed-line';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const NameText = styled.Text`
    color: #000;

    font-family: "Montserrat-Regular";
    font-size: ${({fontSize=16}) => fontSize}px;
`;

export const ValueText = styled.Text`
    color: ${ ({isLEQZero=false}) => isLEQZero ? "#FF1F26" : "#000"};
    font-family: "Montserrat-Bold";
    font-size: ${({fontSize=16}) => fontSize}px;
`;

export const DashedLineStyled = styled(DashedLine)`
	flex-shrink: 1;
	margin-top: ${({fontSize=16}) => fontSize}px; 
	width: 100%;

	padding: 0 4px;
`;
