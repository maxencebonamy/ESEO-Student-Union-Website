import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Infos from "./Infos/Infos";
import VieAssociative from "./VieAssociative/VieAssociative";
import Clubs from "./Clubs/Clubs";
import Bureau from "./Bureau/Bureau";
import Partenaires from "./Partenaires/Partenaires";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Infos />
            <VieAssociative />
            <Clubs />
            <Bureau />
            <Partenaires />
            <Footer />
        </div>
    );
}

export default App;
