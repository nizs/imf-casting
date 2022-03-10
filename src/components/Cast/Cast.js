import React from 'react';
import ('./Cast.css')
const Cast = props => {
const {name , img , born , occupation , film , networth, charge} = props.cast;
    return (
        <div className="cast">
                <img src={img} alt="" srcset="" />
                <p><span>Name</span> : {name}</p>
                <p><span>Born</span> : {born}</p>
                <p><span>Occupation</span> : {occupation}</p>
                <p><span>Film</span> : {film}</p>
                <p><span>Networth</span> : ${networth}</p>
                <p><span>Charge</span> : ${charge}</p>
                <button type="button">Assign</button>
            </div>
    );
};

export default Cast;