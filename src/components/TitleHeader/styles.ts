import styled from "styled-components/native"

export const Container = styled.View``;

export const Title = styled.Text`
	font-family: "Montserrat-Bold";
	font-size: ${({fontSize}) => fontSize}px;
	color: #000;

	margin-bottom: ${({marginBottom}) => marginBottom}px;		
`;

export const SubTitle = styled.Text`
	font-family: "Montserrat-Regular";
	font-size: 12px;
	color: #000; 
`;
