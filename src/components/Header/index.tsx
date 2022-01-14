import React, { useContext } from 'react';

import { Container } from "./styles";

import { ThemeContext } from '../../themes.ts'

interface HeaderProps {
	children: any
}

const Header: React.FC<HeaderProps> = ({ children, ... rest }) => {

	const theme = useContext(ThemeContext);

	return (
		<Container theme={theme} { ... rest}>
			{children}
		</Container>
	)

};

export default Header;