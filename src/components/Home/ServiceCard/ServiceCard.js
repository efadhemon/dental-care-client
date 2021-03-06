import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width: '70px'}} src={service.img} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceCard;