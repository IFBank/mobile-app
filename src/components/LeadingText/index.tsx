import React from 'react';

import { Container, NameText, ValueText, DashedLineStyled } from "./styles"

interface LeadingTextProps {
	textName: string;
	textValue: string;
	integerValue: Integer;
	fontSize: Integer;
}

const LeadingText: React.FC<LeadingTextProps> = ({textName, textValue, fontSize, integerValue, valueColor="#000", ... rest}) => {
	return (
		<Container {... rest} >
			<NameText fontSize={fontSize}>
				{textName}
			</NameText>

			<DashedLineStyled fontSize={fontSize} dashGap={8} dashLength={2} dashThickness={2} />

			<ValueText fontSize={fontSize} isLEQZero={integerValue <= 0} fontColor={valueColor}>
				{textValue}
			</ValueText>
		</Container>
	)
}

export default LeadingText;
