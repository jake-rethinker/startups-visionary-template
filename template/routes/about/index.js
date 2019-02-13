import { h, Component } from 'preact';
import style from './style';




export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}



	render() {
		return (
			<div className={style.home}>
					<div class={style.cardholder}>
						<h1> I feel good sometimes I don't </h1>
					</div>
			</div>
		);
	}
}
