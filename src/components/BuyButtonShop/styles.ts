import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
	position: absolute;

	bottom: 16px;

	padding: 0 16px;
	width: 100%;
	
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const IconButtonCircle = styled.View`
	width: 50px;
	height: 50px;
	
	background-color: #000;

	border-radius: 50px;

	justify-content: center;
	align-items:center;
`;

export const LinearGradientStyled = styled(LinearGradient)`
	width: 100%;
	height: 100%;

	border-radius: 50px;

	justify-content: center;
	align-items:center;
`;