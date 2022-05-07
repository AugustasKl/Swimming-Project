
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

//clients
//stars
import starsRating from 'assets/svg/starsRating.svg'
//clients
import Jules from 'assets/images/Jules.png'
import Rūta from 'assets/images/Ruta.jpeg'
import Michael from 'assets/images/Michael.jpeg'

//what will you get
//falling dude
import FallingDude from 'assets/images/FallingDude.png'



export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	logo,
	facebook,
	instagram,
	twitter,
	freestyle,
	bullet,
	star,
	safecheckout,
	starsRating,
	Jules,
	Rūta,
	Michael,
	FallingDude
};
