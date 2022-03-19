import styled from "styled-components/native"

import BoxContainer from '../BoxContainer';
import GenericButton from "../Button"

import { fonts } from '../../fonts';

export const BoxContainerStyled = styled(BoxContainer)`
    justify-content: center;
    align-items: center;

    padding: 10px 0;
`;

export const MainText = styled.Text`
    color: ${({textColor}) => textColor};

    font-family: ${ fonts.title.bold };
    font-size: 18px;

    text-align: center;

    margin-top: 12px;
`;
