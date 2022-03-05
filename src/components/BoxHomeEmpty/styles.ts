import styled from "styled-components/native"

import BoxContainer from '../BoxContainer';
import GenericButton from "../Button"

import { fonts } from '../../fonts';

export const BoxContainerStyled = styled(BoxContainer)`
    flex-direction: row;
    padding: 20px ${({typeOfEmpty}) => typeOfEmpty=="combos"? 10 : 18}px;
`;

export const ContentContainer = styled.View`
    justify-content: center;
    flex-shrink: 1;
    width: 100%;

    padding-left: 15px;
`;

export const MainText = styled.Text`
    color: #FF1F26;

    font-family: ${ fonts.title.bold };
    font-size: 18px;

    text-align: center;
`;

export const SubTitleText = styled.Text`
    color: #000;
    font-family: ${ fonts.text.light };
    font-size: 10px;

    ${
        ({typeOfEmpty}) => typeOfEmpty=="pedidos"? "text-align: center;" : ""
    }

    margin-top: 12px;
`;

export const StyledButton = styled(GenericButton)`
    margin: 0 24px;
    margin-top: 19px;
`;