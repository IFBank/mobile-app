import styled from "styled-components/native"

import TopBackButtom from '../../../components/TopBackButton';
import ForwardBottomButton from '../../../components/ForwardBottomButton';

export const ImageContainer = styled.View`
	justify-content: center;
	align-items: center;

	padding-top: 54px;
	padding-bottom: 40px;
`;

export const FormContainer = styled.View`
	align-items: center;
	justify-content: center;

	flex: 1;
`;

export const TopBackButtomStyled = styled(TopBackButtom)``;
export const ForwardBottomButtonStyled = styled(ForwardBottomButton)`
	padding: 0;
	padding-bottom: 16px;
`;
