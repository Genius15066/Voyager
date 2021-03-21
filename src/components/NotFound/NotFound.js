import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center error-message">
            <h1>Search Result Did Not Match</h1>
            <h2>404 Error!!!</h2>
        </div>
    );
};

export default NotFound;