import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
	'mt-bold': require('../fonts/Roboto-Regular.ttf'),
	'mt-light': require('../fonts/Roboto-Thin.ttf')
});