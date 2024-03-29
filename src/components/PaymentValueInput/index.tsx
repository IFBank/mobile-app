import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

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

interface InputRef{
	focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, headerText, style, updateIsFilledParent, ... rest}, ref) => {
	const inputElementRef = useRef<any>(null)

	const { registerField, defaultValue = '', fieldName, error } = useField(name)
	const inputValueRef = useRef<InputValueReference>({value: defaultValue})

	const [isFocused, setIsFocused] = useState(false) ;
	const [isFilled, setIsFilled] = useState(false) ;

	const handleInputFocus = useCallback(() => {setIsFocused(true)}, [])
	const handleInputBlur = useCallback(() => {
		setIsFocused(false)

		setIsFilled( !! inputValueRef.current.value)
	}, [])

	useImperativeHandle(ref,  () => ({
		focus(){ 
			inputElementRef.current.focus();
		}
	}));

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
				isFocused={isFocused}
				defaultValue={defaultValue}
				onFocus={handleInputFocus} 
				onBlur={handleInputBlur} 
				onChangeText={(value) => {
					inputValueRef.current.value = value;
					updateIsFilledParent(!! inputValueRef.current.value)

				}}
				{... rest} 
			/>
		</Container>
	)

};

export default forwardRef(Input);