import React, { useState, useCallback, useRef} from "react";

import { useNavigation } from '@react-navigation/native';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import BaseScreen from '../BaseScreen';

import { stages, StageContext } from '../stages';

import { Input } from '../styles'

const StageOne: React.FC = () => {
	const stageNumber = 0;
	const stageOfPage = stages.stagesList[stageNumber];	

	const formRef = useRef<FormHandles>(null);
	const navigation = useNavigation();

	const handleSubmit = useCallback( (data) => {
		// TODO: salvar RA no asyncStorage
		console.log(data)
		navigation.navigate(stageOfPage.nextPage)
	})

	return (
		<StageContext.Provider 
			value={stageOfPage}
		>
			<BaseScreen>
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