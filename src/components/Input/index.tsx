import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

import { TextInputProps, View} from "react-native"
import { useField } from '@unform/core'

import { Container, InputStyled, HeaderInput, HeaderError, IconStyled, InputContainer} from "./styles";


interface InputProps extends TextInputProps{
	name: string
	headerText: string;
	style: any;
	onClickIcon(): void; 
}

interface InputValueReference{
	value: string;
}

interface InputRef{
	focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, headerText, style, onPressIcon, iconData, ... rest}, ref) => {
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
		<Container style={style} isFocused={isFocused}>
		<View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
			<HeaderInput>
				{headerText}
			</HeaderInput>
			{
				error && <HeaderError>
					{error}
				</HeaderError>
			}
		</View>
			
			<InputContainer>
				<InputStyled
					ref={inputElementRef}
					defaultValue={defaultValue}
					onFocus={handleInputFocus} 
					onBlur={handleInputBlur} 
					onChangeText={(value) => {
						inputValueRef.current.value = value;
					}}
					{... rest} 
				/>
				{iconData?.name && <IconStyled onPress={onPressIcon} {... iconData} />}
			</InputContainer>
				
		</Container>
	)

};

export default forwardRef(Input);