import React, {useContext} from "react";

import { TouchableOpacity, View } from "react-native"

import { ThemeContext } from '../../themes.ts'

import Icon from "react-native-vector-icons/MaterialIcons"

import TitleHeader from '../TitleHeader'
import { Container,  PaymentIconStyled, CustomPaymentIconStyled, SendIconContainer } from './styles'

const PaymentTypeBox: React.FC = ({iconName, mainTitle, subTitle, onPress, gradientColor, ... rest}) => {
	const theme = useContext(ThemeContext);

	const IconOrSvg = () => {
		if(iconName == "pix"){
			return <CustomPaymentIconStyled name='pix_black_24dp' size={40} color={theme.linear[gradientColor][0]} />
		}

		return <PaymentIconStyled size={40} color={theme.linear[gradientColor][0]} name={iconName}/>
	}

	return (

		<TouchableOpacity 
			activeOpacity={0.7}
			onPress={onPress}
		>
			
			<Container gradientColor={gradientColor} { ... rest}>
				<IconOrSvg />
				<TitleHeader 
					mainTitle={mainTitle} 
					subTitle={subTitle}
					marginBottomMain={6} 
					fontSizeMain={16} 
				/>
				<SendIconContainer>
					<Icon size={30} color={theme.linear.neutral[0]} name="chevron-right"/>	
				</SendIconContainer>
				
			</Container>

		</TouchableOpacity>

	)
}

export default PaymentTypeBox;
