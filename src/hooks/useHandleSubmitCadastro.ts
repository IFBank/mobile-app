import React, {useCallback, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const saveToItemCache = async (itemCacheName, data) => {
	const valueString = await AsyncStorage.getItem(itemCacheName);

	let itemNewValue = valueString == null ? {} : JSON.parse(valueString);
	itemNewValue = {
		... itemNewValue,
		... data
	};

	return AsyncStorage.setItem(itemCacheName, JSON.stringify(itemNewValue));

}

const validateForm = (page, data) => {

	return {
		hasErrors: false,
		errors: ['teste']
	}
}

export default function useHandleSubmitCadastro(itemCacheName, pageForm, extraAction = () => {}) {
	const [ errors, setErrors ] = useState(null);

	// const navigation = useNavigation();

	const handleSubmit = useCallback( async (data) => {

		const result = validateForm(pageForm, data);

		if(result.hasErrors){
			setErrors(result.errors);
			return;
		}

		setErrors(null);

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