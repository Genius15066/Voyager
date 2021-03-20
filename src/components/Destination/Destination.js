import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';
import './Destination.css'

const Destination = () => {
    const [result, setResult] = useState(true);
    const [place,setPlace]=useState({
        from:'',
        to:''
    })
    const handleResult = (e) => {
        setResult(!result);
        if(e.target.name=="place-from"){
            const newPlace={...place};
            newPlace[e.target.name]=e.target.value;
            setPlace(newPlace);   
        }
         
    }
    console.log(place)
    return (
        <Container>
            <Row>
                <Col md={4} sm={12} className="p-2">
                    {
                       result && <div className="desitination-place p d-flex align-items-center flex-column justify-content-center"> 
                           <label className="place-label" htmlFor="place-form">Pick From</label><br />
                            <input type="text" name="place-from" /><br />
                            <label className="place-label" htmlFor="place-to">Pick To</label><br />
                            <input type="text" name="place-to" /><br />
                            <input onClick={handleResult} className="btn btn-lg btn-success" value="Search"/><br />
                        </div>
                    }
                    {
                       result===false &&<div className="desitination-place ">
                            <h3>From: Mohammadpur</h3>
                            <h3>To: Dhanmondi</h3>
                        </div>
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