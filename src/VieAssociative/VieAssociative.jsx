import './vie_associative.css';
import events from "./events.json";
import Event from "./event";

import clubathon from "./img/clubathon.png";
import gala from "./img/gala.png";
import eseo_perspectives from "./img/eseo_perspectives.png";

function VieAssociative({ appRef }) {
    const images = {
        clubathon: clubathon,
        gala: gala,
        eseo_perspectives: eseo_perspectives
    };

    return (
        <div id="vie_associative" ref={appRef}>
            <h1>Vie associative</h1>
            {
                events.map((event, index) => (
                    <Event key={index} title={event.title} description={event.description} img={images[event.img]} reversed={index % 2 === 0} />
                ))
            }
        </div>
    );
}

export default VieAssociative;
