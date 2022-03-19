import React, {useRef, useCallback, useContext}from "react";

import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import TopBackButton from '../../../components/TopBackButton';
import TitleHeader from '../../../components/TitleHeader';
import BoxContainer from '../../../components/BoxContainer';
import Input from '../../../components/Input';

import { ThemeContext } from '../../../themes';

import { 
	Container, 
	SectionContainer, 
	UnderLineTitle,

	StyledButton,

	ItemContainer,
	HeaderItemText,
	ItemContent,
	ImageStyled,
	InfoContainer,
	RegularText,
} from "./styles";

const Item: React.FC = ({nameItem, quantItem, imageUrl, theme}) => {
	return (
		<ItemContainer gradientColor="secondary" outerStyle={{marginBottom: 14}}>
			<HeaderItemText textColor={theme.text.title}>
				{nameItem}
			</HeaderItemText>

			<ItemContent>
				<ImageStyled source={imageUrl}/>

				<InfoContainer>
					<RegularText textColor={theme.text.text}>Quantidade: </RegularText>
					<RegularText textColor={theme.text.text}> {quantItem} unid.</RegularText>
				</InfoContainer>

			</ItemContent>
		</ItemContainer>
	)
}

// TODO: Scroll view
// TODO: Keyboard avoid view

const ConfirmComboPage: React.Fc = () => {

	const theme = useContext(ThemeContext);

	const formRef = useRef<FormHandles>(null)

	const handleSaveCombo = useCallback((data: object) => {
		// TODO: consulta na API e ações necessarias
		console.log(data)
	}, [])

	return (
		<Container>
			<TopBackButton />
			<TitleHeader mainTitle="Montar Combo" subTitle="Confira os produtos e dê um nome ao seu combo." style={{marginTop: 50}}/>

			<SectionContainer>
				<UnderLineTitle textColor={theme.text.title}>Pedido</UnderLineTitle>			

				<Item nameItem="Pamonha" quantItem={10} theme={theme}/>
			</SectionContainer>
			
			

			<Form ref={formRef} onSubmit={handleSaveCombo}>

				<Input 
					name="combo-name"
					headerText="Insira um nome para o combo."
				/>
				<StyledButton 
					text="Criar Combo"
					textFontSize={24}
					innerStyle={{
						paddingVertical: 14
					}}
					borderRadius={30}
					gradientColor="secondary"
					onPress={
						() => {
							formRef.current?.submitForm()
						}
					}
				/>
			</Form>
		</Container>
	)
}

export default ConfirmComboPage;