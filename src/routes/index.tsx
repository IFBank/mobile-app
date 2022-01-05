import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ScreenExample from '../pages/ScreenExample'

const Example = createNativeStackNavigator()

const ExampleRoutes: React.FC = () => (
	<Example.Navigator
		screenOptions={{
      		headerShown: false,
      		cardStyle: { backgroundColor: '#312E36' },
    	}}
	>
		<Exemple.Screen name="ScreenExample" component={ScreenExample} />
		
	</Example.Navigator>
);

export default ExampleRoutes;
