import styled from "styled-components/native"

import TitleHeader from '../../components/TitleHeader';
import GenericButton from "../../components/Button"
import GenericInput from '../../components/Input';
import ArrowNavegator from '../../components/ArrowNavegator';

export const Container = styled.View`
	flex: 1;
	padding: 0 16px;
	padding-bottom: 25px;
`

export const TextHeader = styled.Text`
	font-family: "Montserrat-Bold";
	font-size: 20px;
	color: #FFF;
`;

export const StageContainer = styled.View`
	flex-direction: row;
	padding: 8px 0px;
	justify-content: space-between;
	align-items: center;
`;

export const StageText = styled.Text``;

export const StageCancelButton = styled(GenericButton)`
	background-color: ${ ({theme}) => theme.secondary};
	border-radius: 20px;
	padding: 6px 14px;
`

export const TitleHeaderStyled = styled(TitleHeader)`
	padding-top: 6px;
`;

export const Input = styled(GenericInput)`
	margin-top: ${({index=0}) => index == 0 ? 32 : 36}px;
`

export const ArrowNavegatorStyled = styled(ArrowNavegator)`
	position: relative;
	bottom: 19px;
	margin-top: 19px;
`;
