import styled from 'styled-components/native';

import BoxContainer from '../BoxContainer'


export const Container = styled(BoxContainer)`
	justify-content: center;
	padding: 0px 12px;
	padding-bottom: 14px;
	background-color: ${ ({greenBox}) => !greenBox ? "#fff" : "#32A041"};
`;

export const HeaderItemText = styled.Text`
	font-family: "Montserrat-SemiBold";
	font-size: 20px;

	text-align: center;

	width: auto;
	padding: 8px 0px
	
	color: ${ ({greenBox}) => greenBox ? "#fff" : "#32A041"};
`;

export const ContentContainer = styled.View`
	flex-direction: row;
	align-items: center;

	width: auto;
`;

export const ImageStyled = styled.Image`
	width: 130px;
	height: 100px;

	margin-right: 14px;

	background-color: black;
	border-radius: 10px;
`; // Adicionar tamanho por desidade de pixel

export const InfoContainer = styled.View`
	justify-content: center;
	flex-grow: 1;
`;

export const RegularText = styled.Text`
	font-family: "Montserrat-Regular";
	font-size: 16px;
	color: ${ ({greenBox}) => greenBox ? "#fff" : "#32A041"};
`;
export const BoldText = styled.Text`
	font-family: "Montserrat-Bold";
	font-size: 16px;
	color: ${ ({greenBox}) => greenBox ? "#fff" : "#32A041"};
`;
