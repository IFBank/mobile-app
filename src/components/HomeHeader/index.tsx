import React, { useContext } from 'react';

import DropShadow from "react-native-drop-shadow";

import { Image, View } from 'react-native';

import { Container, PerfilContainer, TextPerfilNormal, TextPerfilName} from "./styles";

import { ThemeContext } from '../../themes.ts'

import fotoPerfil from "../../assets/miniFotoPerfil.png"
import logoIFBank from "../../assets/miniLogo2.png"

const HomeHeader: React.FC = () => {
	// TODO: Custom hook for use date
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
		<Container colors={theme.linear.primary} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >

			<PerfilContainer>
				{<Image source={fotoPerfil}/>}
				<View>
					<TextPerfilNormal textColor={theme.background}>
						Ola,  
						<TextPerfilName>
						 {" Exodo Jaffar!"}
						</TextPerfilName>
					</TextPerfilNormal>
					
				</View>
			</PerfilContainer>

			{<Image source={logoIFBank} style={{marginRight: 0}}/>}
		</Container>
		</DropShadow>
	)

};

export default HomeHeader;