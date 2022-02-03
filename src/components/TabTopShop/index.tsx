import React, { useState }from "react";

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

	return(
		<Container { ... rest }>
			
			<TabButton 
				isFocused={currentShow == 'salgados'}
				onPress={setPageShow('salgados')}
			>
				<Icon name="bakery-dining" size={20} color={currentShow === "salgados" ? "#999999" : "#32A041"}/>
			</TabButton>

			<TabButton 
				isFocused={currentShow == 'bebidas'}
				onPress={setPageShow('bebidas')}
			>
				<Icon name="local-drink" size={20} color={currentShow === "bebidas" ? "#999999" : "#32A041"}/>
			</TabButton>

		</Container>
	);
}

export default TabTopShop;
