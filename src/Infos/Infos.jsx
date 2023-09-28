import './infos.css';
import Info from "./Info";
import icon_members from "./img/icon_members.svg"
import icon_clubs from "./img/icon_clubs.svg"
import icon_pertnerships from "./img/icon_pertnerships.svg"

function Home() {
    return (
        <div id="infos">
            <h1>Qui sommes-nous</h1>
            <p>
                Nous sommes le BDE ESEONOVA, le BDE de l’ESEO 2022-2023.
                Nous sommes une cinquantaine à faire partie du projet !
                Notre but est de proposer des activités, des soirées, des avantages et d’aider nos 1200 étudiants,
                les faire se sentir bien au sein de notre école. Pour cela nous sommes divisés en plusieurs modules :
                animation, logistique, communication, événementiel, clubs, sponsors, voyage et RCIIA !
            </p>
            <div id="infos_numbers">
                <Info name="Membres" value={50} img={icon_members} />
                <Info name="Clubs" value={25} img={icon_clubs} />
                <Info name="Partenaires" value={5} img={icon_pertnerships} />
            </div>
        </div>
    );
}

export default Home;
