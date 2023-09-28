import './event.css';
import {useRef} from "react";

function Event({title, description, img, reversed=false}) {
    const max_width = useRef([window.innerWidth, window.innerHeight]).current[0];

    const getDirection = () => {
        if (max_width < 1200) {
            return "column-reverse";
        }
        return reversed ? "row" : "row-reverse";
    }

    return (
        <div style={{flexDirection: getDirection()}} className="vie_associative_event">
            <img src={img} alt={title} />
            <div className="vie_associative_event_content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Event;
