import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../fonts'

export const Container = styled(LinearGradient)`
	padding: 0 18px; 

    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`;

export const PerfilContainer = styled.View`
    flex-direction: row;
    align-items: center;

    padding: 20px 0px;

`;

export const TextPerfilNormal = styled.Text`
    margin-left: 15px;
    color: ${({textColor}) => textColor};
    font-size: 20px;
    font-family: ${ fonts.title.regular };

`;

export const TextPerfilName = styled(TextPerfilNormal)`
    font-family: ${ fonts.title.bold };
`;
