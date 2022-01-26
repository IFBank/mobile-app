import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;

	padding-bottom: 5px;
`;

export const PerfilContainer = styled.View`
	flex-direction: row;
	align-items: center;

	padding: 20px 0px;

`;

export const TextPerfilNormal = styled.Text`
	margin-left: 15px;
	color: #FFF;
	font-size: 18px;
	font-family: "Montserrat-Regular";

`;

export const TextPerfilName = styled(TextPerfilNormal)`
	font-family: "Montserrat-Bold";
`;

export const ContentSection = styled.View`
	margin: 0px 16px
	margin-top: 36px;
`;

export const SectionTitle = styled.Text`
	font-family: "Montserrat-Bold";
	font-size: 24px;
	color: #000;
`;

export const SectionParagraph = styled.Text`
	font-family: "Montserrat-Regular";
	font-size: 14px;
	color: #000;

	margin-bottom: 10px;
`;


