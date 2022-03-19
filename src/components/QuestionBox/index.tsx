import React, { useContext, useCallback, useState} from 'react';

import {TouchableWithoutFeedback} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../../themes'

import {Container, Question, QuestionText, Resposta, RespostaTitle, RespostaText } from './styles';

const QuestionBox: React.FC = ({question, resposta}) => {
	const [ showResposta, setShowResposta] = useState(false)

	const theme = useContext(ThemeContext)

	const invertShowResposta = useCallback(() => {
		setShowResposta(!showResposta)
	}, [showResposta])

	return (

		<Container>
			<TouchableWithoutFeedback onPress={invertShowResposta}>
				<Question 
					
					colors={theme.linear.secondary} 
					start={{x: 0, y: 0}} 
					end={{x: 1, y: 0}} 
				>
					<QuestionText textColor={theme.background}>
						{question}
					</QuestionText>
					<Icon name="keyboard-arrow-down" size={24} color={theme.background}/>		
				</Question>
			</TouchableWithoutFeedback>
			

			{showResposta && <Resposta>
				<RespostaTitle textColor={theme.text.title}>Resposta:</RespostaTitle>
				<RespostaText textColor={theme.text.text}>
					{resposta}
				</RespostaText>
			</Resposta>	}
		</Container>
	);
}

export default QuestionBox;
