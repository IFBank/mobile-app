import styled from "styled-components/native"

import LinearGradient from 'react-native-linear-gradient';

import { Platform } from "react-native";

export const BorderLinearGradient = styled(LinearGradient)`
    border-radius: 10px;
    padding: 1px;
`;

export const Container = styled.View`
	border-radius: 10px;

    background-color: ${ ({theme}) => theme.background};

    width: auto;
`;
