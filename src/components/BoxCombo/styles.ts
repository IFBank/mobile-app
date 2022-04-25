import styled from "styled-components/native"

import { fonts } from '../../fonts'

import BoxContainer from '../BoxContainer'

export const Container = styled(BoxContainer)`
    background-color: #0000;

    justify-content: center;

    padding: 0 16px;

    max-width: 300px;
`;

export const CloseIcon = styled.View`
    position: absolute;
    top: 12px;
    right: 12px;

    border-width: 1px;
    border-radius: 12px;

    border-color: ${ ({borderColor}) => borderColor};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${fonts.title.bold};
    color: #FFF;
    font-size: 24px;

    text-align: center;

    margin-top: 20px;
`;

export const VencimentoText = styled.Text`
    font-family: ${fonts.text.semibold};
    color: #32DC32;
    font-size: 18px;

`;

export const VencimentoDate = styled.Text`
    font-family: ${fonts.text.semibold};
    color: #FFF;
    font-size: 18px;

`;

export const TotalOrderContainer = styled.View`
    flex-direction: row;
    margin: 0 16px;

    justify-content: space-between;
    align-items: center;
`;
