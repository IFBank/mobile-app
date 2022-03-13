import styled from "styled-components/native"

import TitleHeader from '../../../components/TitleHeader';
import TopBackButtom from '../../../components/TopBackButton';
import BoxContainer from '../../../components/BoxContainer';

export const QRCodeBox = styled(BoxContainer)`
	justify-content: center;
	align-items: center;

	padding: 5px 40px;
`;

export const TitleHeaderStyled = styled(TitleHeader)`
	margin-top: 60px;
`;

export const PixKeyFakeInputContainer = styled.View`
	margin-top: 30px;
	margin-bottom: 40px;
`;

export const PixKeyHeader = styled(TitleHeader)`
	margin-bottom: 0px;
`;

export const QrCodeHeaderStyled = styled(TitleHeader)`
	margin-bottom: 0px;
`;

export const IconCircle = styled.View`
	position: absolute; 
	bottom: -14px; 
	right: -11px; 

	width: 60px;
	height: 60px;
	
	border-radius: 60px;	
	background-color: ${ ({circleBgColor})=> circleBgColor}; 
	
	align-items: center;
	justify-content: center;
`;

export const TopBackButtomStyled = styled(TopBackButtom)``;
