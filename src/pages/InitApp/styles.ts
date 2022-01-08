import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;

	align-items: center;
`;

export const LogoContainer = styled.View`
	height: 46%;
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
	padding: 0px 41px;
`;

export const Title = styled.Text`
	margin-top: 29px;

	font-family: "Montserrat-SemiBold";

	font-size: 18px;
	text-align: center;
	color:  #111111;

`
