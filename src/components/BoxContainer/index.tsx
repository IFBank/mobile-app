import React, { useContext } from "react";

import DropShadow from "react-native-drop-shadow";

import { ThemeContext } from '../../themes.ts'

import { Container, BorderLinearGradient} from "./styles"

interface BoxContainerProps {
	children: any;
	gradientColor: string;
	outerStyle? : any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({children, gradientColor="primary", outerStyle, ... rest}) => {

	const theme = useContext(ThemeContext);

	return (
		<DropShadow
			style={{
				shadowColor: theme.shadow,
				shadowOffset: {
					width: 0,
					height: 4,
				},
				shadowOpacity: 0.75,
				shadowRadius: 1,
			}}
		>
			<BorderLinearGradient colors={theme.linear[gradientColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={outerStyle}>
				<Container theme={theme} { ... rest }>
					{children}
				</Container>
			</BorderLinearGradient>
		</DropShadow>
	)
}

export default BoxContainer;
