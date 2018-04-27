// @flow

type LogoStyle = {
	size: number,
	top: number
};

type Trackbar = {
	bar: string,
	barHighlight: string,
	handleColor: string
};

type Big = {
	logoStyle: LogoStyle,
	backgroundColor: string,
	titleColor: string,
	textColor: string,
	iconColor: string,
	buttonBackgroundColor: string,
	buttonTextColor: string,
	loaderColor: string,
	offsetTop: number,
	trackbar: Trackbar
};

type ChannelSwitch = {
	logoSize: number,
	logo: string
};

type Colors = {
	primary: string,
	primaryDark: string,
	secondary: string,
	dark: string,
	shade: string,
	light: string,
	ultraLight: string,
	white: string,
};

type FontFamily = {
	regular: string,
	bold: string,
	black: string
};

type Fonts = {
	primary: FontFamily
};

type Header = {
	logo: string,
	height: number
};

type Poll = {
	backgroundColor: string,
	backgroundColorSuccess: string,
	backgroundColorError: string
};

type Quiz = {
	backgroundColorSuccess: string
};

type UiPlayer = {
	logo: string,
	small: {
		height: number
	},
	big: Big
};

export type Theme = {|
	showHeader: boolean,
	colors: Colors,
	background: string,
	fonts: Fonts,
	header: Header,
	channelSwitch: ChannelSwitch,
	poll: Poll,
	quiz: Quiz,
	uiPlayer: UiPlayer,
	nav: {
		height: number
	}
|};

