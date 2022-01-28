import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({theme}) => theme.primary};
	padding: 0 18px; 

	shadow-color: #000;
    shadow-offset-width: 0;
    shadow-offset-height: 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;

    flex-direction: row;
    align-items: center;

    justify-content: space-between;

	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
`

export const TextHeader = styled.Text`
    font-family: "Montserrat-Bold";
    font-size: 20px;
    color: #FFF;
`;
