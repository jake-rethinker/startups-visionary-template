import { h, Component } from 'preact';
import style from './style';



export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}





	render() {
		return (
			<div className={style.home}>
				<div class={style.maincontent}>
					<h1> Team Goals </h1>
					<li> Our first is to do x y z</li>
				</div>
			</div>
		);
	}
}
