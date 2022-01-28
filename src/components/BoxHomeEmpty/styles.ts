import styled from "styled-components/native"

import GenericButton from "../Button"

export const ContentContainer = styled.View`
    justify-content: center;
`;

export const MainText = styled.Text`
    color: #FF1F26;

    font-family: "Montserrat-Bold";
    font-size: 16px;

    text-align: center;
`;

export const SubTitleText = styled.Text`
    color: #000;
    font-family: "Montserrat-Bold";

    text-align: center;
`;

export const StyledButton = styled(GenericButton)`
    background-color: ${ ({theme}) => theme.primary};
    border-radius: 10px;

    padding: 10px 20px;
    margin: 0 70px;
    margin-bottom: 14px;

`;