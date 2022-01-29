import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenExample from '../pages/ScreenExample';
import ScreenExampleStack from '../pages/ScreenExample';

import InitAppScreen from '../pages/InitApp';
import LoginPageScreen from '../pages/LoginPage';
import HomePageScreen from '../pages/HomePage';
import ProfilePageScreen from '../pages/ProfilePage';

import CadastroStageOneScreen from '../pages/SignupFlowPages/StageOne';
import CadastroStageTwoScreen from '../pages/SignupFlowPages/StageTwo';
import CadastroStageThreeScreen from '../pages/SignupFlowPages/StageThree';
import CadastroStagegFourScreen from '../pages/SignupFlowPages/StageFour';

// Headers
import HomeHeader from "../components/HomeHeader"
import BaseHeader from "../components/Header"

const AppStack = createNativeStackNavigator()
const CadastroFlowStack = createNativeStackNavigator()
const HomeTab = createBottomTabNavigator();

const logado = false

const HomeTabs = () => {
	return(
		<HomeTab.Navigator 
			screenOptions={{
				header: BaseHeader,
				tabBarInactiveTintColor:"#0000004c",
				tabBarActiveTintColor: "#32A041"
			}}
			backBehavior="initialRoute"
			initialRouteName="Home"
		>
			<HomeTab.Screen name="Ajuda" component={ScreenExample} /> 
			<HomeTab.Screen name="Shop" component={ScreenExampleStack} />

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
			<CadastroFlowStack.Screen name="StageFour" component={CadastroStagegFourScreen} />
				
		</CadastroFlowStack.Navigator>
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

		<AppStack.Screen name="Deposito" component={ScreenExampleStack} /> 
		
	</AppStack.Navigator>
);

export default AppRoutes;
