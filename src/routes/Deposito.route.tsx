import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BaseHeader from "../components/Header"

import DepositoSetValueScreen from '../pages/DepositoFlowPages/SetValuePage';
import SelectPaymentTypeScreen from '../pages/DepositoFlowPages/SelectPaymentTypePage';
import PixScreen from '../pages/DepositoFlowPages/PixPage';

import ScreenExample from '../pages/ScreenExample';

const DepositoFlowStack = createNativeStackNavigator()

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


export default DepositoFlowStackScreen;