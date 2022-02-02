import React from "react";

function Welcome({firstName, img}) {
    return(
        <div>Welcome {firstName}!<img src={img} alt="" /></div>
    )
}

export default Welcome;