import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import ('./Cast.css')
const Cast = props => {        //Child component of Imf parent component..
const {name , img , born , occupation , film , networth, charge} = props.cast;
const assignIcon = <FontAwesomeIcon icon={faHandshakeAngle} />
    return (
        <div className="cast">
                <img src={img} alt="" srcset="" />
                <p><span>Name</span> : {name}</p>
                <p><span>Born</span> : {born}</p>
                <p><span>Occupation</span> : {occupation}</p>
                <p><span>Film</span> : {film}</p>
                <p><span>Networth</span> : ${networth}</p>
                <p><span>Charge</span> : ${charge}</p>
                <button onClick={ () => props.handleAssign(props.cast)} type="button">{assignIcon}  Assign</button>
            </div>
    );
};

export default Cast;