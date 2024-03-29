import React, { useState, useCallback, useRef, useEffect} from "react";

import { useNavigation } from '@react-navigation/native';

import BaseScreen from '../BaseScreen';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import useHandleSubmitCadastro from '../../../hooks/useHandleSubmitCadastro'

import { stages, StageContext } from '../stages';

import { Input } from '../styles'

const StageThree: React.FC = () => {
	const stageNumber = 2;
	const stageOfPage = stages.stagesList[stageNumber];	

	const formRef = useRef<FormHandles>(null)

	const navigation = useNavigation();

	const extraAction = useCallback(() => {
		navigation.navigate(stageOfPage.nextPage);
	}, []) 

	const {handleSubmit, errors} = useHandleSubmitCadastro("perfil_cadastro", "mail", extraAction);

	useEffect( () => {
		formRef.current.setErrors(errors);
	}, [errors])

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

export default StageThree;