import React, { useState, useCallback, useRef} from "react";

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

	const extraAction = useCallback(() => {
		navigation.navigate(stageOfPage.nextPage);
	}, []) 

	const {handleSubmit, errors} = useHandleSubmitCadastro("perfil_cadastro", "mail", extraAction);

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