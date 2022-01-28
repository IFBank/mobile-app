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
