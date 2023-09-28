import {partenairesImages} from './img/partenairesImages';
import './partenaires.css';
import partenaires from "./partenaires.json"


function Partenaires() {
    return (
        <div id="partenaires">
            <h1>Partenaires</h1>
            <div id="partenaires_content">
                {
                    partenaires.map(partenaire => {
                        const image = partenairesImages[partenaire.img];

                        return (
                            <a key={partenaire.name} href={partenaire.link}><div className="partenaire_logo_content">
                                <img src={image} alt={partenaire.name} />
                            </div></a>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Partenaires;
