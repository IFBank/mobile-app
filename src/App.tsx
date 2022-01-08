import React from "react";
import { View, StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import Routes from "./routes"

const App: React.FC  = ( ) => (
	<NavigationContainer>
		<StatusBar barStyle="light-content" backgroundColor="#32A041" />
		<View style={{flex:1, backgroundColor: "#312E36"}}>
			<Routes />
		</View>
	</NavigationContainer>
);

export default App;


