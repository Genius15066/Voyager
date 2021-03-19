import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Vehicle.css';

const Vehicle = (props) => {
    const { name, img } = props.vehicleType;
    const history=useHistory()
    const handleVehicleType=()=>{   
       const url=`/destination`;
       history.push(url);
    }

    return (
        <Col md={5} xs={10} className="mt-5 mb-2" >
            <Card onClick={()=>handleVehicleType()} className="card-style d-flex justify-content-center align-items-center p-3">
                <Card.Img src={img} className="card-image" />
                <Card.Body className="text-center">
                    <Card.Title className="vehicle-name">{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Vehicle;