import styled from 'styled-components/native';

import { Form } from "@unform/mobile"

export const Container = styled.View`
	flex: 1;
`;

export const MenuContainer = styled.View`
	width: 100%;

`;

export const ContentContainer = styled.FlatList`
	flex: 1;
	padding: 16px 16px;
`;

export const FormStyled = styled(Form)`
	padding: 24px 26px;
	justify-content: center;
`;
