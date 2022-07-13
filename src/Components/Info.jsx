import React from 'react';

const Info = ({location}) => {
    return (
        <div className='location-info'>
            <div className='location-name'>
                <p><strong>{location.name}</strong></p>
            </div>
            <div className="info-flex">
                <p> Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <p>Population: {location.residents?.length}</p>
            </div>
        </div>
    );
};

export default Info;