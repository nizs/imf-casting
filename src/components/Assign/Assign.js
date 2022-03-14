import React from 'react';
import './Assign.css'
const Assign = props => {
const {assign} = props;
let total = 0;
for(const info of assign){
    total = total + info.charge;
}
    return (
        <div className="assigned">
            <h3><span>Cast Assigned :</span> {assign.length}</h3>
            <h3><span>Total cost:</span> ${total} </h3>
            <div className="displayAssigned">
                    {
                        assign.map(actor => 
                            <div className="gotAssigned">
                                <img src={actor.img} alt="actor_img" />
                                <p>{actor.name}</p>
                            </div>)
                    }
            </div>
        </div>
    );
};

export default Assign;