import React, { useState, useContext }from "react";

import { ThemeContext } from '../../themes'

import { Container, TabButton } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons"

const TabTopShop: React.FC = ({ listenChangePage, ... rest }) => {
	const [ currentShow, setCurrentShow ] = useState('salgados');

	const setPageShow = (pageName: string) => {
		return () => {
			setCurrentShow(pageName);
			listenChangePage(pageName)
		}
	}

	const theme = useContext(ThemeContext);

	return(
		<Container { ... rest }>
			{/*TODO: transformar esse tap button num componente*/}
			<TabButton 
				isFocused={currentShow == 'salgados'}
				theme={theme}
				onPress={setPageShow('salgados')}
			>
				<Icon name="bakery-dining" size={40} color={currentShow === "salgados" ? theme.linear.primary[0] : theme.semantic_disable}/>
			</TabButton>

			<TabButton 
				isFocused={currentShow == 'bebidas'}
				theme={theme}
				onPress={setPageShow('bebidas')}
			>
				<Icon name="local-drink" size={25} color={currentShow === "bebidas" ? theme.linear.primary[0] : theme.semantic_disable}/>
			</TabButton>

		</Container>
	);
}

export default TabTopShop;
