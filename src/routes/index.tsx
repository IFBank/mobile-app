import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenExample from '../pages/ScreenExample';
import ScreenExampleStack from '../pages/ScreenExample';

import InitAppScreen from '../pages/InitApp';
import LoginPageScreen from '../pages/LoginPage';

import CadastroStageOneScreen from '../pages/SignupFlowPages/StageOne';
import CadastroStageTwoScreen from '../pages/SignupFlowPages/StageTwo';
import CadastroStageThreeScreen from '../pages/SignupFlowPages/StageThree';
import CadastroStagegFourScreen from '../pages/SignupFlowPages/StageFour';
import CadastroStageFiveScreen from '../pages/SignupFlowPages/StageFive';

const AppStack = createNativeStackNavigator()
const CadastroFlowStack = createNativeStackNavigator()

const logado = false

const CadastroFlowStackScreen = () => {
	return (
		<CadastroFlowStack.Navigator
			screenOptions={{
      			headerShown: false,
      			cardStyle: { backgroundColor: '#312E36' },
    		}}

    		initialRouteName="StageOne"
		>
			<CadastroFlowStack.Screen name="StageOne" component={CadastroStageOneScreen} />
			<CadastroFlowStack.Screen name="StageTwo" component={CadastroStageTwoScreen} />
			<CadastroFlowStack.Screen name="StageThree" component={CadastroStageThreeScreen} />
			<CadastroFlowStack.Screen name="StageFour" component={CadastroStagegFourScreen} />
			<CadastroFlowStack.Screen name="StageFive" component={CadastroStageFiveScreen} />
				
		</CadastroFlowStack.Navigator>
	)
}

const AppRoutes: React.FC = () => (
	<AppStack.Navigator
		screenOptions={{
      		headerShown: false,
      		cardStyle: { backgroundColor: '#312E36' },
    	}}
		initialRouteName={logado == true ? "Home" : "InitApp"}

	>
		<AppStack.Screen name="InitApp" component={InitAppScreen} />
		<AppStack.Screen name="Login" component={LoginPageScreen} />
		<AppStack.Screen name="CadastroFlow" component={CadastroFlowStackScreen} />

		<AppStack.Screen name="Home" component={ScreenExample} />
		<AppStack.Screen name="Perfil" component={ScreenExample} /> 
		<AppStack.Screen name="Dashboard" component={ScreenExample} /> 
		<AppStack.Screen name="Ajuda" component={ScreenExample} /> 

		<AppStack.Screen name="Deposito" component={ScreenExampleStack} /> 
		<AppStack.Screen name="Shop" component={ScreenExampleStack} />
		
	</AppStack.Navigator>
);

export default AppRoutes;
