import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/MaterialIcons"

import ScreenExample from '../pages/ScreenExample';
import ScreenExampleStack from '../pages/ScreenExample';

import InitAppScreen from '../pages/InitApp';
import LoginPageScreen from '../pages/LoginPage';
import HomePageScreen from '../pages/HomePage';
import ProfilePageScreen from '../pages/ProfilePage';

import CadastroStageOneScreen from '../pages/SignupFlowPages/StageOne';
import CadastroStageTwoScreen from '../pages/SignupFlowPages/StageTwo';
import CadastroStageThreeScreen from '../pages/SignupFlowPages/StageThree';
import CadastroStageFourScreen from '../pages/SignupFlowPages/StageFour';

import DepositoSetValueScreen from '../pages/DepositoFlowPages/SetValuePage';
import SelectPaymentTypeScreen from '../pages/DepositoFlowPages/SelectPaymentTypePage';
import PixScreen from '../pages/DepositoFlowPages/PixPage';

import ShopScreen from '../pages/ShopPages/ShopPage';

// Headers
import HomeHeader from "../components/HomeHeader"
import BaseHeader from "../components/Header"

const AppStack = createNativeStackNavigator()

const CadastroFlowStack = createNativeStackNavigator()
const DepositoFlowStack = createNativeStackNavigator()
const FinishsShopStack = createNativeStackNavigator()

const HomeTab = createBottomTabNavigator();

const logado = false

const homeTabNavegatorOptions = ({route}) => {

	const homeTabIcons = ({ focused, color, size }) => {
		let iconName;

		switch (route.name){
			case "Home":
				iconName = "home"
				break;
			case "Ajuda":
				iconName = "contact-support"
				break;
			case "Shop":
				iconName = "storefront"
				break;
			case "Perfil":
				iconName = "account-circle"
				break;
			case "Dashboard":
				iconName = "dashboard"
				break;
			default:
    			console.log(`Nome de rota inesperado: ${route.name}`);
		}

		return(
			<Icon name={iconName}  color={color} size={size}/>
		)
	}

	return {
		tabBarIcon: homeTabIcons,
		header: BaseHeader,

		tabBarInactiveTintColor:"#0000004c",
		tabBarActiveTintColor: "#32A041"
	}
}

const CadastroFlowStackScreen = () => {
	return (
		<CadastroFlowStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			cardStyle: { backgroundColor: '#312E36' },
      			title: "Cadastramento"
    		}}
    		initialRouteName="StageOne"
		>
			<CadastroFlowStack.Screen name="StageOne" component={CadastroStageOneScreen} />
			<CadastroFlowStack.Screen name="StageTwo" component={CadastroStageTwoScreen} />
			<CadastroFlowStack.Screen name="StageThree" component={CadastroStageThreeScreen} />
			<CadastroFlowStack.Screen name="StageFour" component={CadastroStageFourScreen} />
				
		</CadastroFlowStack.Navigator>
	)
}

const DepositoFlowStackScreen = () => {
	return (
		<DepositoFlowStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			cardStyle: { backgroundColor: '#312E36' },
      			title: "Deposito"
    		}}
    		initialRouteName="SetValue"
		>
			<DepositoFlowStack.Screen name="SetValue" component={DepositoSetValueScreen} />
			<DepositoFlowStack.Screen name="SelectPaymentType" component={SelectPaymentTypeScreen} />
			<DepositoFlowStack.Screen name="Pix" component={PixScreen} />
			<DepositoFlowStack.Screen name="Boleto" component={ScreenExample} />
				
		</DepositoFlowStack.Navigator>
	)
}

const FinishsShopStackScreen = () => {
	return (
		<FinishsShopStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			title: "Shop Cantina"
    		}}
    		initialRouteName="Confirm"
		>
			<FinishsShopStack.Screen name="ConfirmPayment" component={ScreenExample} />
			<FinishsShopStack.Screen name="ConfirmCombo" component={ScreenExample} />
			<FinishsShopStack.Screen name="ShowConfirmBeautify" component={ScreenExample} />
				
		</FinishsShopStack.Navigator>
	)
}

const HomeTabs = () => {
	return(
		<HomeTab.Navigator 
			screenOptions={homeTabNavegatorOptions}
			backBehavior="initialRoute"
			initialRouteName="Home"
		>
			<HomeTab.Screen name="Ajuda" component={ScreenExample} /> 
			<HomeTab.Screen name="Shop" component={ShopScreen} 
				options={{
      				title: "Shop Cantina",
      				tabBarLabel: "Cantina"
				}}
			/>

			<HomeTab.Screen 
				name="Home" 
				component={HomePageScreen} 
				options={{
					headerShown: false
				}}
			/>
			<HomeTab.Screen name="Dashboard" component={ScreenExample} /> 
			<HomeTab.Screen name="Perfil" component={ProfilePageScreen} /> 

		</HomeTab.Navigator>
	)
}


const AppRoutes: React.FC = () => (
	<AppStack.Navigator
		screenOptions={{
      		headerShown: false,
      		cardStyle: { backgroundColor: '#312E36' },
    	}}
		initialRouteName={logado == true ? "HomeApp" : "InitApp"}

	>
		<AppStack.Screen name="InitApp" component={InitAppScreen} />
		<AppStack.Screen name="Login" component={LoginPageScreen} />
		<AppStack.Screen name="CadastroFlow" component={CadastroFlowStackScreen} />

		<AppStack.Screen name="HomeApp" component={HomeTabs} />

		<AppStack.Screen name="Deposito" component={DepositoFlowStackScreen} /> 

		<AppStack.Screen name="FinishsShop" component={FinishsShopStackScreen} /> 
		
	</AppStack.Navigator>
);

export default AppRoutes;
