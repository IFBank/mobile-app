import React from "react";
import { Image, StyleSheet} from "react-native";

import Button from '../../components/Button';

import { Container, LogoContainer, ContentContainer,  Title } from "./styles"

import logoIFbank from "../../assets/logo.png"


const InitApp: React.FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Image source={logoIFbank}/>
			</LogoContainer>

			<ContentContainer>
				<Title>
				Cadastre-se para desfrutar de nosso aplicativo
				</Title>

				<Button style={styles.button} >
					Criar cadastro
				</Button>

				<Button style={styles.button} >
					Ja possuo cadastro
				</Button>	
			</ContentContainer>
			
		</Container>
	)
}

const styles = StyleSheet.create({
	button: {	
		backgroundColor: "#32A041",
		padding: "30px 50px",
		marginTop: 30,
		borderRadius: 10,
	}
});

export default InitApp;