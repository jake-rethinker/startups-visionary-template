import { h, Component } from 'preact';
import style from './style';



export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.home}>
					<div class={style.maincontent}>
						{/*Change this email to your own email*/}
                        <form action="https://formspree.io/test@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Name" />
							<input type="email" name="_replyto" placeholder="Email"/>
							<input type="submit" value="Send" />
                        </form>
					</div>
			</div>
		);
	}
}
