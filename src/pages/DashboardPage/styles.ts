import styled from "styled-components/native"

import TitleHeader from '../../components/TitleHeader';
import Button from '../../components/Button';

export const Container = styled.View`
	flex: 1;

	padding-bottom: 25px;
`;

export const ContentSection = styled.View`
	margin: 0px 16px
	margin-top: 26px;
`;

export const TitleHeaderStyled = styled(TitleHeader)`
`;

export const StyledButton = styled(Button)`
	margin: 0 52px;
	margin-top: 40px;
`;
