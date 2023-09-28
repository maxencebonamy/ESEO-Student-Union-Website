import React from "react";
import logo from "./img/logo.svg";
import "./logo.css"


class Logo extends React.Component {
    state = {
        visible: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmout() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const MAX_SCROLL = 0.48 * window.innerWidth / 1.5;
        this.setState({
            visible: !(window.scrollY >= MAX_SCROLL)
        });
    };

    render() {
        return (
            <img id="home_logo" src={logo} alt="logo" style={{display: this.state.visible ? "block" : "none"}} />
        );
    }
}


export default Logo;