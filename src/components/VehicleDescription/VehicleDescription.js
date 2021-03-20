import React from 'react';
import'./VehicleDescription.css'
import fakeData from '../../fakedata/fakedata.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const VehicleDescription = (props) => {
    const typeVehicle=fakeData.find(pd=>pd.name===props.name)
    console.log(typeVehicle);
    const{name,img}=typeVehicle
    return (
        <div className="d-flex justify-content-around mb-4">
           <img className="vehicle-image" src={img} alt=""/>
           <h5>{name}</h5>
           <p><FontAwesomeIcon icon={faUserFriends}/> 6</p>
           <p> $67</p>
        </div>
    );
};

export default VehicleDescription;
