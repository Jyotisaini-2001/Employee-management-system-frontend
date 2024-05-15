
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { cn } from '../utils/cn';

import { useForm } from 'react-hook-form';
import Title from "./ui/title";
import Input from "./ui/input";

export const Info = ({ setInfo }) => {
  const { register, handleSubmit, reset } = useForm();
  const [imageData, setImageData] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        image: imageData,
      };
      await axios.post('http://localhost:3000/submit-form', formData);
      alert('Form submitted successfully');
      setInfo(data);
      reset(); // Reset the form fields after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container">
      <div className="page-content">
        <Title title="Personal Info">
          Please provide your name, profile, address, and department.
        </Title>
        <div className="flex flex-col gap-6">
          <Input
            label="name"
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <Input
            label="Address"
            type="text"
            placeholder="Address"
            {...register('address', { required: true })}
          />
          <Input
            label="state"
            type="text"
            placeholder="State"
            {...register('state', { required: true })}
          />
          <Input
            label="department"
            type="text"
            placeholder="Department"
            {...register('department', { required: true })}
          />
        </div>
      
        <div
        className={cn(
          'flex  bg-white  justify-center', // Center for small screens
          'md:justify-end' // Right align for medium and large screens
        )}
      >
        <button
          type="submit"
          className="rounded-lg px-6 py-3 font-medium text-white transition-colors bg-marine-blue hover:bg-purplish-blue focus:bg-purplish-blue "
        >
          Submit
        </button>
      </div>
      </div>
    </form>
  );
};

// export default Info;