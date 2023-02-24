import React from 'react'
// import { style } from '../../themes/appTheme'
import { useNavigation } from '@react-navigation/native'
import {
	Button,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CameraDonar } from '../../components/icons/CameraDonar'
import { MaginPenDonar } from '../../components/icons/MaginPenDonar'
import { Dollar } from '../../components/icons/Dollar'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'

export const VenderScreen = () => {
	const { height } = useWindowDimensions()
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<View
				style={{
					...style.containerHeader,
					height: height * 0.1,
				}}
			>
				<StyledText weight700 size16 line32>
					Vendé eso que ya no usas.
				</StyledText>
				<StyledText weight700 size16 line32>
					¡Publicar es muy facil!
				</StyledText>
			</View>

			<StyledView container center>
				<View
					style={{
						...style.contenedorCard,
						height: height * 0.5,
					}}
				>
					<View style={style.card}>
						<CameraDonar />

						<View
							style={{
								...style.containerText,
								marginStart: 18,
							}}
						>
							<StyledText size14 line24 left>
								Subi las fotos más lindas de tu producto.
							</StyledText>
						</View>
					</View>

					<View style={style.card}>
						<MaginPenDonar />

						<View style={style.containerText}>
							<StyledText size14 line24 left>
								Brindá detalles como: tipo de producto,
							</StyledText>
							<StyledText size14 line24 left>
								talle y una descripción breve y clara.
							</StyledText>
						</View>
					</View>

					<View style={style.card}>
						<Dollar />

						<View style={style.containerText}>
							<StyledText size14 line24 left>
								Ponele precio y listo, ¡publicalo!
							</StyledText>
						</View>
					</View>
				</View>

				<SyledButton
					white
					title={'Crear publicación'}
					onPress={() => navigator.navigate('FotoProductoScreen')}
				></SyledButton>
			</StyledView>
		</StyledView>
	)
}

const style = StyleSheet.create({
	containerHeader: {
		marginTop: 40,
		marginBottom: 10,
	},
	contenedorCard: {
		justifyContent: 'space-evenly',
		marginBottom: 20,
		marginStart: 15,
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	containerText: {
		marginStart: 20,
	},
})
