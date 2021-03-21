import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Map from '../Map/Map';
import VehicleDescription from '../VehicleDescription/VehicleDescription';
import './Destination.css'

const Destination = () => {
    const {vehicleName} =useParams();
    const [result, setResult] = useState(true);
    const [fromInput, setFromInput] = useState('')
    const [toInput, setToInput] = useState('')
    const [timeInput, setTimeInput] = useState('')
    const handleResult = (e) => {
        setResult(!result);
    }
    return (
        <Container>
            <Row>
                <Col md={4} sm={12} className="p-2">
                    {
                         result && <div className="desitination-place p d-flex align-items-center flex-column justify-content-center">
                            <label className="place-label" htmlFor="place-form">Pick From</label><br />
                            <input type="text" onInput={e => setFromInput(e.target.value)} name="place-from" /><br />
                            <label className="place-label" htmlFor="place-to">Pick To</label><br />
                            <input type="text" onInput={e => setToInput(e.target.value)} name="place-to" /><br />
                            <label className="place-label" htmlFor="picke-time">Time to Pick</label><br />
                            <input type="date" onInput={e => setTimeInput(e.target.value)} name="pick-time" /><br />
                            <input onClick={handleResult} className="btn btn-lg btn-success" value="Search" /><br />
                        </div>
                    }
                    {
                       typeof(vehicleName)!=='undefined' && result === false && <div className="desitination-place ">
                            <div className="text-center text-success pb-3">
                                <h5>From: {fromInput}</h5>
                                <h5>To: {toInput}</h5>
                                <h5>Time to Pick: {timeInput}</h5>
                            </div>
                            <div>
                               <VehicleDescription name={vehicleName}></VehicleDescription>
                               <VehicleDescription name={vehicleName}></VehicleDescription>
                               <VehicleDescription name={vehicleName}></VehicleDescription>
                            </div>
                        </div>
                    }
                    {
                        typeof(vehicleName)==='undefined' &&
                        <h5 className="warning-msg mt-2 text-center">You have to select a vehicle to show the result</h5>
                    }

                </Col>

                <Col md={8} sm={12}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;