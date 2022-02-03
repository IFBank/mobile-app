import React, { useEffect, useRef, useState, useCallback } from 'react';

import { TextInputProps } from "react-native"
import { useField } from '@unform/core'

import Icon from "react-native-vector-icons/MaterialIcons"

import { Container, InputStyled} from './styles';

interface InputProps extends TextInputProps{
	name: string
	style: any;
}

const SearchBarInput: React.FC = ({ name, style, ... rest}) =>{
	const inputElementRef = useRef<any>(null)

	const { registerField, defaultValue = '', fieldName, error } = useField(name)
	const inputValueRef = useRef<InputValueReference>({value: defaultValue})

	const [isFocused, setIsFocused] = useState(false) ;

	const handleInputFocus = useCallback(() => {setIsFocused(true)}, [])
	const handleInputBlur = useCallback(() => {setIsFocused(false)}, [])

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
		<Container style={style} isFocused={isFocused} >
			<InputStyled
				ref={inputElementRef}
				defaultValue={defaultValue}
				onFocus={handleInputFocus} 
				onBlur={handleInputBlur} 
				onChangeText={(value) => {
					inputValueRef.current.value = value;
				}}
				placeholder="Pesquisar..."
				{... rest} 
			/>

			<Icon name="search" size={20} color="#000"/>		
		
		</Container>
	);
}

export default SearchBarInput;
