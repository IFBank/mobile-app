import React from "react";
import { View, StatusBar, useColorScheme } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext, themes } from './themes';

import Routes from "./routes"

const App: React.FC  = ( ) => {
	const theme = useColorScheme() == "dark"? themes.dark : themes.light;

	return (
		<NavigationContainer>

			<ThemeContext.Provider value={theme}>
				<StatusBar barStyle="light-content" backgroundColor={theme.primary} hidden={true} />
				<View style={{flex:1, backgroundColor: "#312E36"}}>
					<Routes />
				</View>
			</ThemeContext.Provider>
				
		</NavigationContainer>
	)
};

export default App;


