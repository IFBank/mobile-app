import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { fonts } from '../../fonts'

// TODO: drop shadow 
export const Container = styled(LinearGradient)`
	padding: 10px 24px; 

	shadow-color: #000;
    shadow-offset-width: 0;
    shadow-offset-height: 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;

    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`

export const TextHeader = styled.Text`
    font-family: ${ fonts.title.bold };
    font-size: 20px;
    color: ${ ({textColor}) => textColor};
`;
