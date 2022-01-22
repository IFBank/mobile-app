import React, { useEffect, useRef } from 'react';

import { TextInputProps } from "react-native"
import { useField } from '@unform/core'

import { Container, InputStyled, HeaderInput} from "./styles";


interface InputProps extends TextInputProps{
	name: string
	headerText: string;
	style: any;
}

interface InputValueReference{
	value: string;
}

const Input: React.FC<InputProps> = ({ name, headerText, style, ... rest}) => {
	// TODO: Implementar o estado do input de focus e sua estilizaçao
	const inputElementRef = useRef<any>(null)

	const { registerField, defaultValue = '', fieldName, error } = useField(name)
	const inputValueRef = useRef<InputValueReference>({value: defaultValue})

	useEffect(() => {
		registerField<string>({
			name: fieldName, 
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref: any, value){
				inputValueRef.current.value = value;
				inputElementRef.current.setNativeProps({ text: value });
			},
			clearValue(){
				inputValueRef.current.value = ''
				inputElementRef.current.clear();
			}
		})
	}, [fieldName, registerField])

	return (
		<Container style={style}>
			<HeaderInput>
				{headerText}
			</HeaderInput>
			<InputStyled
				ref={inputElementRef}
				defaultValue={defaultValue} 
				onChangeText={(value) => {
					inputValueRef.current.value = value;
				}}
				{... rest} 
			/>
		</Container>
	)

};

export default Input;