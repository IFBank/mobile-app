import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

async function getCachedValue(name: string) {
	let cachedValue;

	try{
		cachedValue = await AsyncStorage.getItem(name);

		if(cachedValue == null) return undefined;

		console.debug(`CacheStateHook: Result value of ${name} is ${cachedValue}.`)

		return JSON.parse(cachedValue);

	}catch(err){

	}
}

export default function useCacheState<T = unknow> (name: string, initialValue?: T) {
	let [ state, setState ] =  useState<T>(initialValue);
	let [ isLoadding, setIsLoadding ] =  useState<boolean>(true);

	const setCacheState = (value) => {
		if(value == undefined) return;

		const cachedValue = JSON.stringify(value);

		setIsLoadding(true);

		AsyncStorage.setItem(name, cachedValue).then( () => {
			console.debug(`CacheStateHook: Value ${cachedValue} has been save on "${name}"`);
			setIsLoadding(false);
		})

		setState(value);
	}

	useEffect( () => {

		getCachedValue(name).then( (cachedValue) => {
			setState(cachedValue);
			setIsLoadding(false);
		})	
	})

	console.debug(`CacheStateHook: Value state ${name}: ${state}`)

	return {state, setCacheState, isLoadding};
}