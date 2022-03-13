import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenExample from '../pages/ScreenExample';
import ScreenExampleStack from '../pages/ScreenExample';

import LoginPageScreen from '../pages/LoginPage';

// Headers
import BaseHeader from "../components/Header"

import CadastroStackScreen from './Cadastro.route';
import DepositoStackScreen from './Deposito.route';
import HomeTabsScreen from './Home.route';

const AppStack = createNativeStackNavigator()

const ConfirmBuyShopStack = createNativeStackNavigator()
const ComboShopStack = createNativeStackNavigator()

const logado = false

const ConfirmBuyShopStackScreen = () => {
	return (
		<ConfirmBuyShopStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			title: "Shop Cantina"
    		}}
    		initialRouteName="ConfirmPayment"
		>
			<ConfirmBuyShopStack.Screen name="ConfirmPayment" component={ScreenExample} />
			<ConfirmBuyShopStack.Screen name="ShowConfirmBeautify" component={ScreenExample} />
				
		</ConfirmBuyShopStack.Navigator>
	)
}

const ComboShopStackScreen = () => {
	return (
		<ComboShopStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			title: "Shop Cantina"
    		}}
    		initialRouteName="ConfirmCombo"
		>
			<ComboShopStack.Screen name="ConfirmCombo" component={ScreenExample} />
			<ComboShopStack.Screen name="ShowConfirmBeautify" component={ScreenExample} />
				
		</ComboShopStack.Navigator>
	)
}

const AppRoutes: React.FC = () => (
	<AppStack.Navigator
		screenOptions={{
      		headerShown: false,
      		cardStyle: { backgroundColor: '#312E36' },
    	}}
		initialRouteName={logado == true ? "HomeApp" : "Login"}

	>
		<AppStack.Screen name="Login" component={LoginPageScreen} />
		<AppStack.Screen name="CadastroFlow" component={CadastroStackScreen} />

		<AppStack.Screen name="HomeApp" component={HomeTabsScreen} />

		<AppStack.Screen name="Deposito" component={DepositoStackScreen} /> 

		<AppStack.Screen name="FinishsShopBuy" component={ConfirmBuyShopStackScreen} /> 
		<AppStack.Screen name="FinishsShopCombo" component={ComboShopStackScreen} /> 
		
	</AppStack.Navigator>
);

export default AppRoutes;
