import { h, Component } from 'preact';
import style from './style';

const Gate = require('../../assets/gate.jpg');

class WebSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div class={style.slides}>
                <img src={this.props.image} class={style.companyimage} style=""/>
            </div>
        )
    }
}
export default WebSlider;
