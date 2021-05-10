import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 am - 9:00 am',
        totalSpace: 10
    },{
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:00 am - 11:30 am',
        totalSpace: 15
    },{
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 am - 60:30 pm',
        totalSpace: 10
    },{
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 am - 8:30 am',
        totalSpace: 15
    },{
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '12:00 pm - 2:00 pm',
        totalSpace: 10
    },{
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '7:00 pm - 9:00 pm',
        totalSpace: 10
    }
];

const BookAppointment = ({date}) => {

    return (
        <section className="container">
            <h1 className="text-center text-brand mb-5">Available Appointment on {date.toDateString()}</h1>

            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>

        </section>
    );

};

export default BookAppointment;