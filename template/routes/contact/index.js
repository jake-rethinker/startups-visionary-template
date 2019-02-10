import { h, Component } from 'preact';
import style from './style';



export default class Team extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}



	render() {
		return (
			<div className={style.home}>
                <form action="https://formspree.io/your@email.com" method="POST">
                    <input type="text" name="name">
                        <input type="email" name="_replyto">
							<input type="submit" value="Send" />
                </form>
			</div>
	);
	}
}
