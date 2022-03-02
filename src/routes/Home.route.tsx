import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/MaterialIcons"

import BaseHeader from "../components/Header"

import HomePageScreen from '../pages/HomePage';
import ProfilePageScreen from '../pages/ProfilePage';

import ShopScreen from '../pages/ShopPages/ShopPage';

import ScreenExample from '../pages/ScreenExample';

const HomeTab = createBottomTabNavigator();

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

export default HomeTabs;

