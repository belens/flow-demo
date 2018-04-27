// @flow

import type {Theme} from '../../typed/theme';

const theme: Theme = {
	showHeader: true,
	background: 'bg.js',
	colors: {
		primary: '#2c2a79',
		primaryDark: '#932421',
		secondary: '#CB030B',
		dark: '#424242',
		shade: '#999999',
		light: '#eeeeee',
		ultraLight: '#f1f2f2',
		white: '#ffffff'
	},
	fonts: {
		primary: {
			regular: 'BrandonText-Regular',
			bold: 'BrandonText-Bold',
			black: 'BrandonText-Black'
		}
	},
	header: {
		logo: 'logo',
		height: 23
	},
	channelSwitch: {
		logoSize: 75,
		logo: 'logo'
	},
	poll: {
		backgroundColor: 'colors.shade',
		backgroundColorSuccess: 'colors.primary',
		backgroundColorError: 'red'
	},
	quiz: {
		backgroundColorSuccess: 'green'
	},
	uiPlayer: {
		logo: 'logoWhite',
		small: {
			height: 32
		},
		big: {
			logoStyle: { size: 85, top: -10 },
			backgroundColor: 'colors.primary',
			titleColor: 'colors.white',
			textColor: 'colors.white',
			iconColor: 'colors.white',
			buttonBackgroundColor: 'colors.white',
			buttonTextColor: 'colors.primary',
			loaderColor: 'colors.white',

			offsetTop: 32,
			trackbar: {
				bar: 'colors.light',
				barHighlight: 'colors.primary',
				handleColor: 'colors.primary'
			}
		}
	},
	nav: {
		height: 12
	}
};

export default theme;
