import React from 'react';
import Sidebar from '../SideBAr/Sidebar';
import './AddService.css'
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <section className="dashBoard">
        <div className="sidebar">
<Sidebar></Sidebar>
        </div>
        <div className="book">
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("name", { required: true })} placeholder='service name' />
      {errors.nameRequired && <span>This field is required</span>}
      <input {...register("Price", { required: true })} placeholder='service Price' />
      {errors.priceRequired && <span>This field is required</span>}
      <input type="file" {...register("file", { required: true })} />
      {errors.fileRequired && <span>This field is required</span>}
     <button className="Primary-btn" type="submit"> Add Service </button>
    </form>
        </div>
      </section>
    );
};

export default AddService;<h1>Add service</h1>