import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Infos from "./Infos/Infos";
import VieAssociative from "./VieAssociative/VieAssociative";
import Clubs from "./Clubs/Clubs";
import Bureau from "./Bureau/Bureau";
import Partenaires from "./Partenaires/Partenaires";
import Footer from "./Footer/Footer";
import { useRef } from 'react';

function App() {
    const sections = {
        home: useRef(null),
        infos: useRef(null),
        vieAssociative: useRef(null),
        clubs: useRef(null),
        bureau: useRef(null),
        partenaires: useRef(null)
    }

    return (
        <div className="App">
            <Header sectionsRefs={sections} />
            <Home appRef={sections.home} />
            <Infos appRef={sections.infos} />
            <VieAssociative appRef={sections.vieAssociative} />
            <Clubs appRef={sections.clubs} />
            <Bureau appRef={sections.bureau} />
            <Partenaires appRef={sections.partenaires} />
            <Footer />
        </div>
    );
}

export default App;
