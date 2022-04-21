import React, { useState, useContext} from 'react';

import { ThemeContext } from '../../themes.ts';
import CacheContext from '../../CacheContext';

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container } from "./styles";

interface HideSaldoButtonProps{
	onPress: () => {};
}

const HideSaldoButton: React.FC<HideSaldoButtonProps> = ({ ... rest }) => {
	const cacheContext = useContext(CacheContext);
	const {state: hidden, setCacheState: setHidden} = cacheContext['hiddenSaldo']

	const theme = useContext(ThemeContext);

	// FIX: No visual response on press event

	return (
		<Container { ... rest }  >
			<Icon 
				iconStyle={{marginRight: 8}}
				name={hidden?"visibility-off":"visibility"}
				size={30}
				color={theme.text.title}
				onPress={ 
					() => {
						setHidden(!hidden);
					} 
				}
			/>
		</Container>
				
	)

};

export default HideSaldoButton;
