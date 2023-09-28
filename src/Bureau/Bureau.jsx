import "./bureau.css";
import bureau_restreint from "./bureau_restreint.json";
import {bureauImages} from "./img/bureauImages";
import responsables from "./responsables.json";


function Bureau() {

    const contact_images = (file) => {
        let output = [];

        for (let key in file) {
            const image = bureauImages[file[key].img];

            output.push(<a key={key} href={"mailto:" + file[key].mail}><div className="bureau_photo">
                <img src={image} alt={file[key].name} />
                <h5>{file[key].name}</h5>
                <h6>{file[key].role}</h6>
            </div></a>);
        }
        return output;
    };

    return (
        <div id="bureau">
            <h1>Bureau</h1>
            <div className="bureau_content" style={{maxWidth: "900px"}}>
                {
                    contact_images(bureau_restreint)
                }
            </div>
            <div className="bureau_content" style={{maxWidth: "1200px"}}>
                {
                    contact_images(responsables)
                }
            </div>
        </div>
    );
}

export default Bureau;
