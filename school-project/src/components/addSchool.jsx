import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../App.css';

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('contact', data.contact);
        formData.append('email_id', data.email_id);
        formData.append('image', data.image[0]);

        axios.post('http://localhost:5000/addschool', formData)
            .then(res => alert('School added successfully'))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} placeholder="School Name" />
            {errors.name && <span>This field is required</span>}

            <input {...register('address', { required: true })} placeholder="Address" />
            {errors.address && <span>This field is required</span>}

            <input {...register('city', { required: true })} placeholder="City" />
            {errors.city && <span>This field is required</span>}

            <input {...register('state', { required: true })} placeholder="State" />
            {errors.state && <span>This field is required</span>}

            <input type="number" {...register('contact', { required: true })} placeholder="Contact" />
            {errors.contact && <span>This field is required</span>}

            <input type="email" {...register('email_id', { required: true })} placeholder="Email" />
            {errors.email_id && <span>This field is required</span>}

            <input type="file" {...register('image', { required: true })} />
            {errors.image && <span>This field is required</span>}

            <button type="submit">Add School</button>
        </form>
    );
};

export default AddSchool;
