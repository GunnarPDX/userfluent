import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1> 404 not found </h1>
        <Link to="/">Return to Home Page</Link>
    </div>
);

export default NotFound;