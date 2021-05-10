import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ducimus? Exercitationem veritatis ducimus iusto modi.'
    }, {
        name: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ducimus? Exercitationem veritatis ducimus iusto modi.'
    }, {
        name: 'Teeth Whitening',
        img: whitening,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ducimus? Exercitationem veritatis ducimus iusto modi.'
    }
];

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceCard service={service} key={service.name}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;