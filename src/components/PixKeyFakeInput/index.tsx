import React, { useCallback } from 'react';

import { ToastAndroid } from "react-native"
import Clipboard from '@react-native-clipboard/clipboard';

import { Container, TextShowStyled} from "./styles";

interface InputProps extends TextInputProps{
	headerText: string;
	content: string;
}


const PixKeyFakeInput: React.FC<InputProps> = ({headerText, content, ... rest}) => {

	const copyToClipboard = () => {
		Clipboard.setString(content);
	};
	
	const handleTextPress = useCallback(() => {

		copyToClipboard()

		ToastAndroid.show("Chave PIX copia para area de transferencia", ToastAndroid.SHORT)
		console.log(content)
	}, []);

	return (
		<Container {... rest}>
			<TextShowStyled onLongPress={handleTextPress}>{content}</TextShowStyled>
		</Container>
	)

};

export default PixKeyFakeInput;