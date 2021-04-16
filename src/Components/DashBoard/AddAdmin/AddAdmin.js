import React from 'react';
import Sidebar from '../SideBAr/Sidebar';
import './addadmin.css'
import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch("http://localhost:4000/addAdmin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => alert("Admin Added successfully"));

    };
    

    return (
        <section className="dashBoard">
          <div className="sidebar">
<Sidebar></Sidebar>
          </div>
          <div className="book">
              <h1>Add Admin</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="example@gmail.com" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      
    <button className="Primary-btn" type="submit">Add Admin</button>
    </form>
          </div>
        </section>
    );
};

export default AddAdmin;