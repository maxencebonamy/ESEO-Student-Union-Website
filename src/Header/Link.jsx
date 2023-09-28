import './link.css';

function Link({href, onClick, children}) {
    return (
        <a className="home_link" href={href} onClick={onClick}>
            <p>{children}</p>
        </a>
    );
}

export default Link;
