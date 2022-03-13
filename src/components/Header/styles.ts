import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../fonts'

// TODO: drop shadow 
export const Container = styled(LinearGradient)`
	padding: 10px 24px; 

    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`

export const TextHeader = styled.Text`
    font-family: ${ fonts.title.bold };
    font-size: 20px;
    color: ${ ({textColor}) => textColor};
`;
