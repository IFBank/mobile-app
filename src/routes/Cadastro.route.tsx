import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BaseHeader from "../components/Header"

import CadastroStageOneScreen from '../pages/SignupFlowPages/StageOne';
import CadastroStageTwoScreen from '../pages/SignupFlowPages/StageTwo';
import CadastroStageThreeScreen from '../pages/SignupFlowPages/StageThree';
import CadastroStageFourScreen from '../pages/SignupFlowPages/StageFour';

const CadastroFlowStack = createNativeStackNavigator()

const CadastroFlowStackScreen = () => {
	return (
		<CadastroFlowStack.Navigator
			screenOptions={{
      			header: BaseHeader,
      			title: "Cadastramento",
      			cardStyle: { backgroundColor: '#FEFFFE' },
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

export default CadastroFlowStackScreen;