import React, { useContext } from "react";

import { ThemeContext } from '../../themes.ts'

import { Text } from 'react-native'


import { Container, BorderLinearGradient} from "./styles"

interface BoxContainerProps {
	children: any;
	gradientColor: string;
	outerStyle? : any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({children, gradientColor="primary", outerStyle, ... rest}) => {

	const theme = useContext(ThemeContext);

	

	return (
		<BorderLinearGradient colors={theme.linear[gradientColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={outerStyle}>
			<Container theme={theme} { ... rest }>
				{children}
			</Container>
		</BorderLinearGradient>

	)
}

export default BoxContainer;
