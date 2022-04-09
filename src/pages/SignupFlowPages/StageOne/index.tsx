import React, { useState, useCallback, useRef} from "react";

import { useNavigation } from '@react-navigation/native';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import useHandleSubmitCadastro from '../../../hooks/useHandleSubmitCadastro'

import AsyncStorage from '@react-native-async-storage/async-storage';

import BaseScreen from '../BaseScreen';

import { stages, StageContext } from '../stages';

import { Input } from '../styles'

const StageOne: React.FC = () => {
	const stageNumber = 0;
	const stageOfPage = stages.stagesList[stageNumber];	

	const formRef = useRef<FormHandles>(null);
	const navigation = useNavigation();

	const extraAction = useCallback(() => {
		AsyncStorage.getItem("ra_cadastro").then((dataString) => {
			const data  = JSON.parse(dataString)
			AsyncStorage.setItem('ra', `${data['ra']}`)	
		})

		navigation.navigate(stageOfPage.nextPage);
	}, []) 

	const {handleSubmit, errors} = useHandleSubmitCadastro("ra_cadastro", "ra", extraAction);

	return (
		<StageContext.Provider 
			value={stageOfPage}
		>
			<BaseScreen formRef={formRef}>
				<Form 
					ref={formRef}
					onSubmit={handleSubmit}
				>
					<Input 
						index={0}
						onSubmitEditing={ () => formRef.current?.submitForm() } 
						{ ... stageOfPage.inputs[0]} 
					/>
				</Form>
				
			</BaseScreen>
		</StageContext.Provider>
			
	)
}

export default StageOne;