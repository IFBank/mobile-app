import React, { useContext } from "react";

import { ThemeContext } from '../../themes.ts'

import { Container } from "./styles"

interface BoxContainerProps {
	children: any;
	boxColor: string;
}

const BoxContainer: React.FC<BoxContainerProps> = ({children, boxColor}) => {

	const theme = useContext(ThemeContext);

	return (
		<Container boxColor={boxColor} theme={theme}>
			{children}
		</Container>
	)
}

export default BoxContainer;
