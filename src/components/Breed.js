import React from 'react';

const Breed = ({ name, temp }) => {

    if (!name || !temp) {
        return null
    }

    return (
        <li className="breed-item">
            <h5>{name}</h5>
            <h6>{temp}</h6>
            <hr></hr>
        </li>
    )
}

export default Breed;
