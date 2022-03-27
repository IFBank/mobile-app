import React, { useContext } from "react";

import DropShadow from "react-native-drop-shadow";

import { ThemeContext } from '../../themes.ts'

import { Container, BorderLinearGradient, ProfileContainer, ProfileImage, TextName, TextInfoName, TextInfo, TextBio} from "./styles"

interface BoxDevsProps {
	outerStyle? : any;
}

const BoxDevs: React.FC<BoxDevsProps> = ({name, mail, github, bio, outerStyle, ... rest}) => {

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
			<BorderLinearGradient colors={theme.linear.secondary} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={outerStyle}>
				<Container theme={theme} { ... rest }>
					<ProfileContainer>
						<ProfileImage colorBorder={theme.linear.secondary[0]}/>
						<TextName textColor={theme.text.title}>{name}</TextName>
					</ProfileContainer>
					<TextBio textColor={theme.text.title} >{bio}</TextBio>

					<TextInfoName textColor={theme.text.title}>Email: <TextInfo textColor={theme.text.title}>{mail}</TextInfo></TextInfoName>
					<TextInfoName textColor={theme.text.title}>Github: <TextInfo textColor={theme.text.title}>{github}</TextInfo></TextInfoName>
				</Container>
			</BorderLinearGradient>
		</DropShadow>
	)
}

export default BoxDevs;
