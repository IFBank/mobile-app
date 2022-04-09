import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

async function getCachedValue(name: string) {
	let cachedValue = await AsyncStorage.getItem('@storage_Key')
	
	if(!cachedValue) return undefined
	
	return cachedValue == "sim";
}

export default function useCacheState<T = unknow> (name: string, initialValue: T) {
	let cachedValue = getCachedValue(name);
	let [ state, setState ] =  useState<T>(cachedValue || initialValue);

	useEffect( () => {
		let value = state ? "sim" : "nao";
		AsyncStorage.setItem(name, value);
	}, [state])

	return [state, setState];
}