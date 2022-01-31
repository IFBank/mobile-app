import styled from 'styled-components/native';

import Icon from "react-native-vector-icons/MaterialIcons"

export const Container = styled.View`
	padding: 0 30px;
	width: 100%;
	
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const IconButtonCircle = styled(Icon.Button)`
	width: 50px;
	height: 50px;
`;

