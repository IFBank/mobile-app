import styled from "styled-components/native"

import GenericButton from "../Button"

export const SaldoContainer = styled.View`
    margin: 0px 12px;
    margin-top: 18px;
    margin-bottom: 22px;

    flex-direction: row;
    justify-content: space-between;
`;

export const SaldoText = styled.Text`
    color: #000;

    font-family: "Montserrat-Regular";
    font-size: 16px;
    background-color: #f2f2f2;
    z-index: 1;
`;

export const SaldoTextValue = styled.Text`
    color: ${ ({isLEQZero=false}) => isLEQZero ? "#FF1F26" : "#000"};
    font-family: "Montserrat-Bold";
    font-size: 16px;
`;

export const StyledButton = styled(GenericButton)`
    background-color: ${ ({theme}) => theme.primary};
    border-radius: 10px;

    padding: 10px 20px;
    margin: 0 70px;
    margin-bottom: 14px;

`;