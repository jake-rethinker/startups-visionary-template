import { h, Component } from 'preact';
import style from './style';

const Twitter = require('../../assets/platforms/twitter.png');
const YouTube = require('../../assets/platforms/youtube.png');
const Twitch = require('../../assets/platforms/twitch.png');
const Instagram = require('../../assets/platforms/insta.png');



class LinkCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div class={style.menu}>
                <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
                <div class={style.card}>
                    <img src={this.props.image} class={style.cardimg} draggable={false} />
                    <h1 className={style.h1}> {this.props.text} </h1>
                    <p class={style.streamertitle}> {this.props.title} </p>
                    <div class={style.container}>
                        <div class={style.platforms}>
                            <a href={this.props.twitch} target="_blank">
                            <img src={Twitch} class={style.platform} />
                            </a>
                            <a href={this.props.twitter} target="_blank">
                            <img src={Twitter} class={style.platform} />
                            </a>
                            <a href={this.props.youtube} target="_blank">
                            <img src={YouTube} class={style.platform} />
                            </a>
                            <a href={this.props.insta} target="_blank">
                            <img src={Instagram} class={style.platform} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default LinkCard;
