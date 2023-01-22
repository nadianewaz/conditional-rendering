import React from 'react';
import "./Test.css";

const Test = () => {
    // let isLogged = true;
    let names = ["nadi", "saba", "habu"];
    return (
        <>
        {/* <h2>welcome { isLogged ? "atikur" : "guest"}</h2> */}

        {
         names.map((name) => {
           return <h2 key={name}>{name}</h2>
         })



        }




            
        </>
    );
};

export default Test;