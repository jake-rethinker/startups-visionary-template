import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';

const Logo = require('../../assets/team/logo.svg');


class Header extends Component {
    constructor() {
        super();
        this.state ={
            items: ['Home', 'About', 'Login']
        };
    }
    render() {
        return (
        	<div class={style.headerdaddy}>
                <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
                <link href="https://www.dafont.com/hemi-head.font" rel="stylesheet" type="text/css" />
				<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px', maxHeight: '57px', zIndex: '9000' }}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/#">
                            <img src={Logo} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Team Visionary <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
				</Headroom>
			</div>
        );
    }
}

export default Header;
