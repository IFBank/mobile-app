import React, {useContext, useState} from 'react';

import { ThemeContext } from '../../themes.ts';

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container } from "./styles";

interface HideSaldoButtonProps{
	onPress: () => {};
}

const HideSaldoButton: React.FC<HideSaldoButtonProps> = ({ onPress, ... rest }) => {
	const [hidden, setHidden] = useState(false);

	const theme = useContext(ThemeContext);

	// FIX: No visual response on press event

	return (
		<Container { ... rest }  >
			<Icon 
				iconStyle={{marginRight: 8}}
				name={hidden?"visibility-off":"visibility"}
				size={30}
				color={theme.semantic_disable}
				onPress={ 
					() => {
						setHidden(!hidden);
						onPress(!hidden);
					} 
				}
			/>
		</Container>
				
	)

};

export default HideSaldoButton;
