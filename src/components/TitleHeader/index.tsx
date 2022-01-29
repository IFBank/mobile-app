import React from "react";

import {Container, Title, SubTitle} from './styles';

interface TitleHeaderProps {
	mainTitle: string;
	subTitle: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ mainTitle, subTitle, ... rest}) => {
	return (
		<Container { ... rest }>
			<Title>{mainTitle}</Title>
			<SubTitle>{subTitle}</SubTitle>
		</Container>
	)
}

export default TitleHeader