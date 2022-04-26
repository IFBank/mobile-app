import React, { useState, useCallback, useRef, useEffect} from "react";

import { useNavigation } from '@react-navigation/native';

import BaseScreen from '../BaseScreen';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import AsyncStorage from '@react-native-async-storage/async-storage';

import {apiIFBANK} from '../../../services/api'
import useHandleSubmitCadastro from '../../../hooks/useHandleSubmitCadastro'

import { stages, StageContext } from '../stages';

import { Input } from '../styles'

const StageTwo: React.FC = () => {
	const stageNumber = 1;
	const stageOfPage = stages.stagesList[stageNumber];	

	const navigation = useNavigation();

	const formRef = useRef<FormHandles>(null)

	const extraAction = useCallback(async () => {
		// TODO: chamar a api
		const data = await AsyncStorage.getItem("ra_cadastro")

		console.log(data)

		apiIFBANK.post('/ifms/validate', JSON.parse(data)).then( (response) => {
			const {status} = response;

			if(status != 200) return;

			console.log(response.data)

			AsyncStorage.setItem("token_ra", response.data.token_ra)

			navigation.navigate(stageOfPage.nextPage);
		})
		
		
	}, []) 

	const {handleSubmit, errors: validateErrors} = useHandleSubmitCadastro("ra_cadastro", "ra_dados", extraAction);

	useEffect( () => {
		formRef.current.setErrors(validateErrors);
	}, [validateErrors])

	return (
		<StageContext.Provider
			value={stageOfPage}
		>
			<BaseScreen formRef={formRef}>
				<Form
					ref={formRef}
					onSubmit={handleSubmit}
				>
					{stageOfPage.inputs.map( 
						(value, index) => (
							<Input 
								index={index}
								key={value.name}
								{ ... value}
							/>
						)
					)}
				</Form>
			</BaseScreen>
		</StageContext.Provider> 
			
	)
}

export default StageTwo;