import React from "react";
import "./mentions_legales.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function MentionsLegales() {
    return (
        <>
            <Header />
            <div id="mentions_legales">
                <h1>Mentions légales</h1>
                <h2>Éditeur</h2>
                <p>Le site www.bdeeseo.fr (ci-après le « Site ») est édité par l'association BDE ESEO Angers, dont l'adresse est située au 10 BD Jean Jeanneteau, 49100 Angers.</p>

                <h2>Coordonnées de correspondance</h2>
                <p>Adresse : 10 BD Jean Jeanneteau, 49100 Angers</p>
                <p>Téléphone : 02 41 86 67 67</p>
                <p>Courrier électronique : contact@bdeeseo.fr</p>
                <p>Directeur de la publication : Maxence Bonamy</p>

                <h2>Hébergeur</h2>
                <p>Le site est hébergé par la société SAS PulseHeberg</p>
                <p>Statut de la société : Société par Actions Simplifiée</p>
                <p>Siège social : 9, Boulevard de Strasbourg 83000 Toulon France</p>
                <p>Adresse électronique : contact@pulseheberg.com</p>
            </div>
            <Footer />
        </>
    );
}

export default MentionsLegales;