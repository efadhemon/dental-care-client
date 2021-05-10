import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data);

        data.service = appointmentOn;
        data.appointmentDate = date;
        data.createdDate = new Date();

        fetch('http://localhost:4000/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(result => {
            if (result) {
               alert('Your Appointment is successful');
               closeModal()
            }
        })
        .catch(err => {
            alert('please try again');
        })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-center text-secondary">On {date.toDateString()}</p>

                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Phone Number" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group row">
                        <div className="col-4">
                            <select {...register("gender", { required: true })} className="form-control" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input className="form-control" type="text" placeholder="Age" {...register("age", { required: true })} />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input className="form-control" type="text" placeholder="Wight" {...register("wight", { required: true })} />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <input className="btn btn-brand" type="submit" value="Send" />
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;