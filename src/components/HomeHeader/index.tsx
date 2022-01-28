import React, { useContext } from 'react';

import { Image, View } from 'react-native';

import { Container, PerfilContainer, TextPerfilNormal, TextPerfilName} from "./styles";

import { ThemeContext } from '../../themes.ts'

import fotoPerfil from "../../assets/miniFotoPerfil.png"
import logoIFBank from "../../assets/miniLogo2.png"

const HomeHeader: React.FC = () => {

	const theme = useContext(ThemeContext);

	return (
		<Container theme={theme}>

			<PerfilContainer>
				{<Image source={fotoPerfil}/>}
				<View>
					<TextPerfilNormal>
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