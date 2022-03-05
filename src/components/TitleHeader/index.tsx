import React, {useContext}from "react";

import { ThemeContext } from '../../themes.ts'

import {Container, Title, SubTitle} from './styles';

interface TitleHeaderProps {
	mainTitle: string;
	subTitle: string;
	fontSizeMain: Interger;
	marginBottomMain: Interger;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ mainTitle, subTitle, fontSizeMain=20, marginBottomMain=9, ... rest}) => {
	const theme = useContext(ThemeContext);

	return (
		<Container { ... rest }>
			<Title textColor={theme.text.title} fontSize={fontSizeMain} marginBottom={marginBottomMain} >{mainTitle}</Title>
			{(subTitle!=="") && <SubTitle textColor={theme.text.text} >{subTitle}</SubTitle>}
			
		</Container>
	)
}

export default TitleHeader