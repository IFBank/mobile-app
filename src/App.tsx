import React from "react";
import { View, StatusBar, useColorScheme } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeContext, themes } from './themes';

import Routes from "./routes"

const App: React.FC  = ( ) => {
	const theme = useColorScheme() == "dark"? themes.dark : themes.light;

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


