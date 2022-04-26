import React, {useCallback, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import validations from '../validations'

const saveToItemCache = async (itemCacheName, data) => {
	const valueString = await AsyncStorage.getItem(itemCacheName);

	let itemNewValue = valueString == null ? {} : JSON.parse(valueString);
	itemNewValue = {
		... itemNewValue,
		... data
	};

	return AsyncStorage.setItem(itemCacheName, JSON.stringify(itemNewValue));

}

const validateForm = async (page, data) => {

	try{
		await validations[page].validate(data, {
			abortEarly: false,
		});

		return {
			hasErrors: false,
			errors: {}
		}

	}catch(err){
		const validationErrors = {};

		err.inner.forEach(error => {
        	validationErrors[error.path] = error.message;
        });

		return {
			hasErrors: true,
			errors: validationErrors
		}
	}

}

export default function useHandleSubmitCadastro(itemCacheName, pageForm, extraAction = () => {}) {
	const [ errors, setErrors ] = useState({});

	// const navigation = useNavigation();

	const handleSubmit = useCallback( async (data) => {

		const result = await validateForm(pageForm, data);

		if(result.hasErrors){
			setErrors(result.errors);
			return;
		}

		setErrors({});

		saveToItemCache(itemCacheName, data).then(extraAction)

		// const newData = await AsyncStorage.getItem("cadastro_data")

		console.log(data)
		// console.log(newData)

		// extraAction.call(this)

		// TODO	: Deixar o navigate interno na tela, e ter validação com a api
		//navigation.navigate(nextPage)
	}, [])

	return {handleSubmit, errors};
}