import "./clubs.css";
import clubs from "./clubs.json";
import {clubsImages} from "./img/clubsImages";

function Clubs() {

    return (
        <div id="clubs">
            <h1>Clubs</h1>
            <div id="clubs_logos">
                {
                    clubs.map(club => {
                        const image = clubsImages[club.img];

                        return (
                            <a key={club.name} href={club.link}><div className="club_logo_content">
                                <img src={image} alt={club.name} />
                                <h6>{club.name}</h6>
                            </div></a>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Clubs;
