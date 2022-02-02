import React from "react";

import {Container, Title, SubTitle} from './styles';

interface TitleHeaderProps {
	mainTitle: string;
	subTitle: string;
	fontSizeMain: Interger;
	marginBottomMain: Interger;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ mainTitle, subTitle, fontSizeMain=20, marginBottomMain=9, ... rest}) => {
	return (
		<Container { ... rest }>
			<Title fontSize={fontSizeMain} marginBottom={marginBottomMain} >{mainTitle}</Title>
			{(subTitle!=="") && <SubTitle>{subTitle}</SubTitle>}
			
		</Container>
	)
}

export default TitleHeader