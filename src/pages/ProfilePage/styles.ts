import styled from 'styled-components/native';

import GenericButton from '../../components/Button';
import GenericInput from '../../components/Input';
import Icon from "react-native-vector-icons/MaterialIcons"

export const Container = styled.View`
	flex: 1;
	padding-bottom: 25px;
	
`;

export const ImageContainer = styled.View`
	width: 100%;
	align-items: center;
	margin-top: 40px;
`;

export const IconStyled = styled(Icon)`
	position: absolute;
	bottom: 0;
	right: 35px;
`;

export const Input = styled(GenericInput)`
	margin: 0 16px
	margin-top: 48px;
`;

export const ButtonContainer = styled.View`
	width: 100%;
	flex-direction: row;

	align-items: center;
	justify-content: center;

	margin-top: 30px;
`;

export const Button = styled(GenericButton)`
	margin: 0 12px;
`;

