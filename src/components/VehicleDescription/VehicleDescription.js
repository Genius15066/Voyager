import React from 'react';
import'./VehicleDescription.css'

const VehicleDescription = (props) => {
    console.log(props.name)
    return (
        <div className="d-flex justify-content-around ">
           <h5>{props.name}</h5>
           <p> $67</p>
        </div>
    );
};

export default VehicleDescription;
