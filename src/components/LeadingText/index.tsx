import React from 'react';

import { Container, NameText, ValueText, DashedLineStyled } from "./styles"

interface LeadingTextProps {
	textName: string;
	textValue: string;
	integerValue: Integer;
	fontSize: Integer;
}

const LeadingText: React.FC<LeadingTextProps> = ({textName, textValue, fontSize, fontFamilyName="Regular", integerValue=1, valueColor="#000", colorNameText="#000", ... rest}) => {
	return (
		<Container {... rest} >
			<NameText fontSize={fontSize} fontFamilyName={fontFamilyName} colorNameText={colorNameText}>
				{textName}
			</NameText>

			<DashedLineStyled dashColor={colorNameText} fontSize={fontSize} dashGap={8} dashLength={2} dashThickness={2} />

			<ValueText fontSize={fontSize} isLEQZero={integerValue <= 0} fontColor={valueColor}>
				{textValue}
			</ValueText>
		</Container>
	)
}

export default LeadingText;
