import React, { useState } from "react";

import BaseScreen from '../BaseScreen';

import { stages, StageContext } from '../stages';

import { Input } from './styles'


const StageThree: React.FC = () => {
	const stageNumber = 2;
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

export default StageThree;