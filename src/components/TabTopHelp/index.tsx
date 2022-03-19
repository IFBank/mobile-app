import React, { useState, useContext }from "react";

import { ThemeContext } from '../../themes'

import { Container, TabButton } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons"

const TabTopShop: React.FC = ({ listenChangePage, ... rest }) => {
	const [ currentShow, setCurrentShow ] = useState('questions');

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
				isFocused={currentShow == 'questions'}
				theme={theme}
				onPress={setPageShow('questions')}
			>
				<Icon name="help" size={30} color={currentShow === "questions" ? theme.linear.primary[0] : theme.semantic_disable}/>
			</TabButton>

			<TabButton 
				isFocused={currentShow == 'group'}
				theme={theme}
				onPress={setPageShow('group')}
			>
				<Icon name="groups" size={40} color={currentShow === "group" ? theme.linear.primary[0] : theme.semantic_disable}/>
			</TabButton>

		</Container>
	);
}

export default TabTopShop;
