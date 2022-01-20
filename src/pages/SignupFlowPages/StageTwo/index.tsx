import React, { useState } from "react";

import BaseScreen from '../BaseScreen';

import { stages, StageContext } from '../stages';

import { Input } from './styles'


const StageTwo: React.FC = () => {
	const stageNumber = 1;
	const stageOfPage = stages.stagesList[stageNumber];	

	return (
		<StageContext.Provider
			value={stageOfPage}
		>
			<BaseScreen>
				
			</BaseScreen>
		</StageContext.Provider> 
			
	)
}

export default StageTwo;