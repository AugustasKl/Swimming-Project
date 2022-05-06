
//logo
import logo from 'assets/images/logo.png';

//socialIcons

import facebook from 'assets/svg/facebook.svg';
import instagram from 'assets/svg/instagram.svg';
import twitter from 'assets/svg/twitter.svg';

// freestyle
import freestyle from 'assets/gifs/freestyle.gif'

//bulletPoints
import bullet from 'assets/svg/bulletPoint.svg'

//star (most popular pricing plan)
import star from 'assets/svg/star.svg'

//safe checkout
import safecheckout from 'assets/images/SafeCheckout.png'

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	logo,
	facebook,
	instagram,
	twitter,
	freestyle,
	bullet,
	star,
	safecheckout
};
