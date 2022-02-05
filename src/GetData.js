import {useState, useEffect } from "react";

function GetData() {
    const [data, setData] = useState([]);

    useEffect( () => {
        async function api() {
            try {

                const response = await fetch(
                    `https://api.github.com/users/timmywheels/repos`
                  );
                const result = await response.json();
                setData(data => [...result]);
            } catch(err) {
                console.log('err', err);
            }
        }
        api();
    });

    return(
        <>
            <div>
                My data from api
                {data.map(id => {
                    return <p key={id.id}>{id.id}</p>
                })}
            </div>
        </>
    );
}

export default GetData;