import './home.css';
import Logo from "./Logo";
import background from "./img/background.png"
import background_front from "./img/background_front.png"

function Home({ appRef }) {
    return (
        <div id="home" ref={appRef}>
            <img id="home_background" src={background} alt="background" />
            <Logo />
            <img id="home_background_front" src={background_front} alt="background" />
        </div>
    );
}

export default Home;
