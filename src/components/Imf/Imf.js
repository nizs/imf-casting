import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cast from '../Cast/Cast';
import './Imf.css'
const Imf = () => {
const [casts , setCasts] = useState([]);
useEffect( () => {
    fetch('./imfDb.json')
    .then(res => res.json())
    .then(data => setCasts(data))
},[])
    return (
        <div className="imf-container">
            <div className="casts-container">
            {
                casts.map(cast => <Cast key={cast.key} cast={cast}></Cast>)
            }
            </div>
            <div className="assigned">
                <div className="cast">
                <h3>cast assigned : 0</h3>
                <h3>Total cast: 0</h3>
                </div>
            </div>
        </div>
    );
};

export default Imf;