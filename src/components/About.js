import React, { useContext, useEffect } from 'react'
import NamesContext from '../context/names/NamesContext';

const About = () =>{ 
    const a = useContext(NamesContext)
    useEffect(()=>{
        a.update();  
        // eslint-disable-next-line  
    },2000)

    return (
        <div>
            <h1>This is About {a.state.name} and he is from {a.state.place}</h1>
        </div>
      )
};

export default About


