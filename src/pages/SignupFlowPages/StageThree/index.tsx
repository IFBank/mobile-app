import React, { useState, useCallback, useRef} from "react";

import BaseScreen from '../BaseScreen';

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import { stages, StageContext } from '../stages';

import { Input } from '../styles'


const StageThree: React.FC = () => {
	const stageNumber = 2;
	const stageOfPage = stages.stagesList[stageNumber];	

	const formRef = useRef<FormHandles>(null)

	const handleSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<StageContext.Provider
			value={stageOfPage}
		>
			<BaseScreen>
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