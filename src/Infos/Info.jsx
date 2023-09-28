import React from "react";
import "./info.css";


class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            interval: 2 * 1000 / props.value,
            animated: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        setInterval(() => {
            let value = this.state.value;
            if (value < this.props.value) {
                ++value;
            }

            this.setState({
                value: value,
                interval: this.state.interval * 2
            });
        }, this.state.interval);
    }

    componentWillUnmout() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const MIN_SCROLL = 0.5 * window.innerHeight;
        const MAX_SCROLL = 2.5 * window.innerHeight;

        if (window.scrollY >= MIN_SCROLL && window.scrollY <= MAX_SCROLL && !this.state.animated) {
            this.setState({
                animated: true,
                value: 0,
                interval: 2 * 1000 / this.props.value
            });
        }
        else if ((window.scrollY < MIN_SCROLL || window.scrollY > MAX_SCROLL) && this.state.animated) {
            this.setState({
                value: this.props.value,
                animated: false
            });
        }
    };

    render() {
        return (
            <div className="info">
                <img className="info_img" src={this.props.img} alt={"icon_" + this.props.name.toLowerCase()} />
                <div className="info_text">
                    <h3>{this.state.value}</h3>
                    <h4>{this.props.name}</h4>
                </div>
            </div>
        );
    }

}

export default Info;
