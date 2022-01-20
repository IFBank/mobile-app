import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import BaseScreen from '../BaseScreen';

import { stages, StageContext } from '../stages';

import { Input } from './styles'

const StageOne: React.FC = () => {
	const stageNumber = 0;
	const stageOfPage = stages.stagesList[stageNumber];	

	const navigation = useNavigation()

	return (
		<StageContext.Provider 
			value={stageOfPage}
		>
			<BaseScreen>
				<>
					<Input 
						{ ... stageOfPage.inputs[0]} 
						onSubmitEditing={ 
							() => {
								// TODO: salvar RA no asyncStorage
								navigation.navigate(stageOfPage.nextPage)
							}
						} 
					/>
				</>
				
			</BaseScreen>
		</StageContext.Provider>
			
	)
}

export default StageOne;