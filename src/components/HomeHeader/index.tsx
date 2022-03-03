import React, { useContext } from 'react';

import { Image, View } from 'react-native';

import { Container, PerfilContainer, TextPerfilNormal, TextPerfilName} from "./styles";

import { ThemeContext } from '../../themes.ts'

import fotoPerfil from "../../assets/miniFotoPerfil.png"
import logoIFBank from "../../assets/miniLogo2.png"

const HomeHeader: React.FC = () => {
	// TODO: Custom hook for use date
	const theme = useContext(ThemeContext);

	return (
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

			{<Image source={logoIFBank} style={{marginRight: -18}}/>}
		</Container>
	)

};

export default HomeHeader;