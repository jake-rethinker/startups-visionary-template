import { h, Component } from 'preact';
import style from './style';
import LinkCard from '../../components/linkcard'

const SaltySole = {
	text: 'SaltySole',
	image: require('../../assets/team/Sole.png'),
	title: 'Founder',
    insta: 'https://twitter.com/SaltySole',
    twitch: 'https://www.twitch.tv/saltysole',
    youtube: 'https://www.youtube.com/channel/UC-ayOLqlJC2BoL6jZ7SHAIg?view_as=subscriber',
    twitter: 'https://twitter.com/SaltySole'
};
const Ishadar = {
	text: 'Ishadar',
	image: require('../../assets/team/Ishadar.png'),
    title: 'Founder',
    insta: '',
    twitch: 'https://www.twitch.tv/ishadar',
    youtube: '',
    twitter: ''
};
const Vadesy = {
	text: 'Vadesy',
	image: require('../../assets/team/vadesy.png'),
    title: 'Founder',
    insta: 'https://www.instagram.com/vadesytv/',
    twitch: 'https://www.twitch.tv/vadesy',
    youtube: 'https://www.youtube.com/channel/UCLjfkz3O4FuE4nPyA1w53TQ',
    twitter: ''
};


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [SaltySole, Vadesy, Ishadar]
		};
	}

	renderCards() {
		return this.state.links.map((card) => <LinkCard text={card.text} image={card.image} title={card.title} twitter={card.twitter} youtube={card.youtube} twitch={card.twitch} insta={card.insta}/>);
	}



	render() {
		return (
			<div className={style.home}>
                <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
					<div class={style.cardholder}>
						{ this.renderCards() }
					</div>
			</div>
		);
	}
}
