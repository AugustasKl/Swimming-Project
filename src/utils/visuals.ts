
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

//swimming coaches
// import coachA from 'assets/images/CoachA.png'
import coachB from 'assets/images/CoachB.png'
import coachC from 'assets/images/CoachC.png'
// import coachD from 'assets/images/CoachD.png'
import coachE from 'assets/images/CoachE.png'
import coachF from 'assets/images/CoachF.png'
import coachG from 'assets/images/CoachG.png'
import coachH from 'assets/images/CoachH.png'

//rating

import connect from 'assets/svg/connect.svg'
import arrow from 'assets/svg/arrow.svg'


//partners
import lithuaniaSwimming from 'assets/images/lithuania.png'
import lithuaniaWithoutText from 'assets/images/lithuaniaWithoutText.jpeg'
import usaSwimming from 'assets/images/usa.jpeg'
import usaWithoutText from 'assets/images/usaWithoutText.png'
import olympics from 'assets/images/olympics.png'


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
	FallingDude,
	// coachA,
	coachB,
	coachC,
	// coachD,
	coachE,
	coachF,
	coachG,
	coachH,
	connect,
	arrow,
	lithuaniaSwimming,
	lithuaniaWithoutText,
	usaWithoutText,
	usaSwimming,
	olympics


};
