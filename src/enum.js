// @flow

export const AUDIO_TYPES = {
	CHANNEL: 'channel',
	ONDEMAND: 'ondemand'
};

type AUDIO_TYPES_ENUM = $Keys<typeof AUDIO_TYPES>;

// Example:

const foo: AUDIO_TYPES_ENUM = 'ONDEMAND';


if (foo === 'ONDEMAND') {
	// do stuff
}
