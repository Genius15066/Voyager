import React from 'react';
import'./VehicleDescription.css'
import fakeData from '../../fakedata/fakedata.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const VehicleDescription = (props) => {
    const typeVehicle=fakeData.find(pd=>pd.name===props.name)
    console.log(typeVehicle);
    const{name,img,price}=typeVehicle
    return (
        <div className="d-flex justify-content-around align-items-center mb-4 p-3 vehicle-info">
           <img className="vehicle-image" src={img} alt=""/>
           <h5>{name}</h5>
           <p><FontAwesomeIcon icon={faUserFriends}/> 6</p>
           <p> ${price}</p>
        </div>
    );
};

export default VehicleDescription;
