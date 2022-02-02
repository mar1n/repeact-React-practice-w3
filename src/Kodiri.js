import React from "react";
import Welcome from "./Welcome";
import Jurassic from "./img/jurasic.jpg"
import NotthingHill from "./img/notthingHill.jpg";
import Purge from "./img/thePurge.jpg";

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <Welcome firstName='Peter' img={Jurassic} />
                <Welcome firstName='Marie' img={NotthingHill} />
                <Welcome firstName='John' img={Purge}/>
            </div>
        )
    }
}

export default Gallery;