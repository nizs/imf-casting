import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Assign from '../Assign/Assign'; // imported "assign" component
import Cast from '../Cast/Cast';  // imported "cast" component
import './Imf.css'
const Imf = () => {                        // parent componet "Imf"
const [casts , setCasts] = useState([]);
const [assign , setAssign] = useState([]);
useEffect( () => {
    fetch('./imfDb.json')
    .then(res => res.json())
    .then(data => setCasts(data))
},[])

// cast assigning btn function
const handleAssign = apoint => {
    const newAssign = [...assign , apoint];
    setAssign(newAssign);
}
    return (
        <div className="imf-container">
            <div className="casts-container">
            {
                casts.map(cast => <Cast key={cast.key} cast={cast} handleAssign={handleAssign}></Cast>)
            }
            </div>
            <div className="assigned-contianer">
                <Assign assign={assign}></Assign>
            </div>
        </div>
    );
};

export default Imf;