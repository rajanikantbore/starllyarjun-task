import React, { useState } from "react";
import NamesContext from "./NamesContext";

const NamesState = (props)=>{
    const s1 = {
        "name" : "Ashok",
        "place" : "Hyderabad"
    }

    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name" : "Rajanikant",
                "place" : "Banglore"
            })
        }, 1000);
    }

    return (
        <NamesContext.Provider value = {{state,update}}>
            {props.children}
        </NamesContext.Provider>
    )
}

export default NamesState;