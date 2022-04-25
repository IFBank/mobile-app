import React, { useState, useCallback, useRef} from "react";

import BaseScreen from '../BaseScreen';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import {apiIFBANK} from '../../../services/api'
import useHandleSubmitCadastro from '../../../hooks/useHandleSubmitCadastro'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { stages, StageContext } from '../stages';

import { Input } from '../styles'

const StageFour: React.FC = () => {
	const stageNumber = 3;
	const stageOfPage = stages.stagesList[stageNumber];	

	const formRef = useRef<FormHandles>(null)

	const extraAction = useCallback(async () => {

		let formData =  AsyncStorage.getItem('perfil_cadastro')
		formData =  JSON.parse(formData);

		const ra =  await AsyncStorage.getItem('ra');
		const ra_token =  await AsyncStorage.getItem('token_ra');
		
		const data = {
			... formData,
			['ra']: ra,
			['ra_token']: ra_token
		} 

		apiIFBANK.post('/user/create', data).then( (response) => {
			AsyncStorage.clear();
			navigation.navigate("Login");	
		})

		
	}, []) 

	const {handleSubmit, errors} = useHandleSubmitCadastro("perfil_cadastro", "perfil", extraAction);

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

export default StageFour;