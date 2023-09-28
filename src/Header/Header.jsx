import './header.css';
import Link from "./Link";
import icon from "./icon.svg";
import {useRef, useState} from "react";
import closed_menu from "../assets/closed.svg";
import open_menu from "../assets/open.svg";

function Header() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    let [opened, updateMenu] = useState(false)

    const onButtonClick = event => {
        updateMenu(
            () => !opened
        );
    }

    const hover = (
        <div id="menu_hover" style={{opacity: opened ? 1 : 0, visibility: opened ? "visible" : "hidden"}}>
            <div id="menu_hover_top">
                <a id="menu_button" onClick={onButtonClick}><img src={open_menu} alt="Open Menu" /></a>
            </div>
            <Link href="../#infos" onClick={onButtonClick}>À propos</Link>
            <Link href="../#vie_associative" onClick={onButtonClick}>Vie associative</Link>
            <Link href="../#clubs" onClick={onButtonClick}>Clubs</Link>
            <Link href="../#bureau" onClick={onButtonClick}>Bureau</Link>
            <Link href="../#partenaires" onClick={onButtonClick}>Partenaires</Link>
            <a className="header_extern_link" href="https://etudiants.bdeeseo.fr" target="_blank" rel="noreferrer">
                <p>Site interne</p>
            </a>
        </div>
    );

    return (
        <div id="header">
            {hover}
            <div id="header_left">
                <a href="/">
                    <img id="header_icon" src={icon} alt="icon" />
                </a>
            </div>

            <div id="header_right">
                {
                    windowSize.current[0] > 1000 ? <>
                        <Link href="../#infos">À propos</Link>
                        <Link href="../#vie_associative">Vie associative</Link>
                        <Link href="../#clubs">Clubs</Link>
                        <Link href="../#bureau">Bureau</Link>
                        <Link href="../#partenaires">Partenaires</Link>
                        <a className="header_extern_link" href="https://etudiants.bdeeseo.fr" target="_blank" rel="noreferrer">
                            <p>Site interne</p>
                        </a>
                    </> : <a id="menu_button" onClick={onButtonClick} style={{opacity: opened ? 0 : 1}}>
                        <img src={closed_menu} alt="Open Menu" />
                    </a>
                }
            </div>
        </div>
    );
}

export default Header;
