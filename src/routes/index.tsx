import React, { useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// HOOKS
import useCacheState from '../hooks/useCacheState'

import ScreenExample from '../pages/ScreenExample';
import ScreenExampleStack from '../pages/ScreenExample';

import LoginPageScreen from '../pages/LoginPage';

// Headers
import BaseHeader from "../components/Header"

import CadastroStackScreen from './Cadastro.route';
import DepositoStackScreen from './Deposito.route';
import HomeTabsScreen from './Home.route';

import ConfirmComboPage from '../pages/ShopPages/ConfirmComboPage';
import ConfirmPaymentPage from '../pages/ShopPages/ConfirmPaymentPage';

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
			<ConfirmBuyShopStack.Screen name="ConfirmPayment" component={ConfirmPaymentPage} />
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
			<ComboShopStack.Screen name="ConfirmCombo" component={ConfirmComboPage} />
			<ComboShopStack.Screen name="ShowConfirmBeautify" component={ScreenExample} />
				
		</ComboShopStack.Navigator>
	)
}


const AppRoutes: React.FC = () => {
	const [ isLogged, setIsLogged ] = useState(false);
	const { state: authToken, isLoadding } = useCacheState('auth_token');

	useEffect( () => {
		console.log(`Value of Login: ${authToken != undefined}`)
		setIsLogged( authToken != undefined);
	}, [authToken]);

	// TODO: SplashScreen or some loading

	if(isLoadding){
		return <ScreenExample/>
	}

	return (
		<AppStack.Navigator
			screenOptions={{
	      		headerShown: false,
	      		cardStyle: { backgroundColor: '#312E36' },
	    	}}
		>
		{ isLogged ? (
			<>
				<AppStack.Screen name="HomeApp" component={HomeTabsScreen} />
				<AppStack.Screen name="Deposito" component={DepositoStackScreen} /> 
				<AppStack.Screen name="FinishsShopBuy" component={ConfirmBuyShopStackScreen} /> 
				<AppStack.Screen name="FinishsShopCombo" component={ComboShopStackScreen} /> 
			</>
			) : (
			<>
				<AppStack.Screen name="Login" component={LoginPageScreen} /> 
				<AppStack.Screen name="CadastroFlow" component={CadastroStackScreen} /> 
			</>)
		}
			
		</AppStack.Navigator>
	)
};

export default AppRoutes;
