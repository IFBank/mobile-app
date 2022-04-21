import React, { useContext } from 'react';

import CacheContext from '../CacheContext'

export default function useCacheContext (cacheName) {
	const cacheContext = useContext(CacheContext)

	if(! Object.keys(cacheContext).includes(cacheName)){
		throw Error(`CacheContext: ${cacheName} do not exists.`);
	}

	return cacheContext[cacheName];
}