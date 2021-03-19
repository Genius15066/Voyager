import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col style={{ background: 'red' }} md={4} sm={12}>
                    this is me
                </Col>

                <Col  md={8} sm={12}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;