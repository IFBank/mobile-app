import React, { useEffect } from "react";
import { View, StatusBar, useColorScheme } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { setUpAuthToken } from './services/api';
import useCacheState from './hooks/useCacheState';

import { ThemeContext, themes } from './themes';

import Routes from "./routes"

const App: React.FC  = ( ) => {
	const theme = useColorScheme() == "dark"? themes.dark : themes.light;

	/*
	 Quando o auth_token for mudando em qualquer parte da aplicação
	 ou quando a aplicação iniciar, será feita a atualização do 
	 token no axios para o uso na API.
	*/

	const { state: authToken } = useCacheState('auth_token');
	
	useEffect( () => {
		setUpAuthToken();
	}, [authToken]);

	return (
		<NavigationContainer>

			<ThemeContext.Provider value={theme}>
				<StatusBar barStyle="light-content" backgroundColor={theme.linear.primary[0]} hidden={true} />
				<GestureHandlerRootView style={{flex:1}} >
					<View style={{flex:1, backgroundColor: theme.background}}>
						<Routes />
					</View>	
				</GestureHandlerRootView>
				
			</ThemeContext.Provider>
				
		</NavigationContainer>
	)
};

export default App;


