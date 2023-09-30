import './header.css';
import Link from "./Link";
import icon from "./icon.svg";
import {useEffect, useRef, useState} from "react";
import closed_menu from "../assets/closed.svg";
import open_menu from "../assets/open.svg";

function Header({ sectionsRefs }) {
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const resize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        } 
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    let [opened, updateMenu] = useState(false)

    // const onButtonClick = event => {
    //     updateMenu(
    //         () => !opened
    //     );
    // }

    const onButtonClick = (e, section, mobile=false) => {
        e.preventDefault()

        if (mobile) {
            updateMenu(
                () => !opened
            );
        }

        const ref = sectionsRefs[section]
        if (ref && ref.current) ref.current.scrollIntoView({ block: "nearest", behavior: 'smooth' })
    }

    const hover = (
        <div id="menu_hover" style={{opacity: opened ? 1 : 0, visibility: opened ? "visible" : "hidden"}}>
            <div id="menu_hover_top">
                <a id="menu_button" onClick={() => updateMenu(() => !opened)}><img src={open_menu} alt="Open Menu" /></a>
            </div>
            <Link href="" onClick={e => onButtonClick(e, "infos", true)}>À propos</Link>
            <Link href="" onClick={e => onButtonClick(e, "vieAssociative", true)}>Vie associative</Link>
            <Link href="" onClick={e => onButtonClick(e, "clubs", true)}>Clubs</Link>
            <Link href="" onClick={e => onButtonClick(e, "bureau", true)}>Bureau</Link>
            <Link href="" onClick={e => onButtonClick(e, "partenaires", true)}>Partenaires</Link>
            <a className="header_extern_link" href="https://etudiants.bdeeseo.fr" target="_blank" rel="noreferrer">
                <p>Site interne</p>
            </a>
        </div>
    );

    return (
        <div id="header">
            {hover}
            <div id="header_left">
                <a href="" onClick={e => onButtonClick(e, "home")}>
                    <img id="header_icon" src={icon} alt="icon" />
                </a>
            </div>

            <div id="header_right">
                {
                    windowSize[0] > 1000 ? <>
                        <Link href="" onClick={e => onButtonClick(e, "infos")}>À propos</Link>
                        <Link href="" onClick={e => onButtonClick(e, "vieAssociative")}>Vie associative</Link>
                        <Link href="" onClick={e => onButtonClick(e, "clubs")}>Clubs</Link>
                        <Link href="" onClick={e => onButtonClick(e, "bureau")}>Bureau</Link>
                        <Link href="" onClick={e => onButtonClick(e, "partenaires")}>Partenaires</Link>
                        <a className="header_extern_link" href="https://etudiants.bdeeseo.fr" target="_blank" rel="noreferrer">
                            <p>Site interne</p>
                        </a>
                    </> : <a id="menu_button" onClick={() => updateMenu(() => !opened)} style={{opacity: opened ? 0 : 1}}>
                        <img src={closed_menu} alt="Open Menu" />
                    </a>
                }
            </div>
        </div>
    );
}

export default Header;
