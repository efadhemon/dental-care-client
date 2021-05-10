import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';


const infosData = [
    {
        title: 'Opening Hours',
        description: 'We Are 7 Days Open',
        icon: faClock,
        background: 'primary'
    }, {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    }, {
        title: 'Call Us Now ',
        description: '+12345678999',
        icon: faPhone,
        background: 'primary'
    }
];

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;