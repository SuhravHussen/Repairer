import React, { useContext, useState } from "react";
import Sidebar from "../SideBAr/Sidebar";
import "./givereview.css";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
const GiveReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useContext(userContext);
  const [review, setReview] = useState({});


  const onSubmit = (data) => {
      console.log(userInfo);
      
    const myReview={
        name: userInfo.name,
        photo:userInfo.img,
        review:data.review
    }
    fetch("http://localhost:4000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => alert("Thanks For Giving Review"));
  };

  return (
    <section className="dashBoard">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="book">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="give review"
            {...register("review", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <button className="Primary-btn" type="submit">
            Give Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default GiveReview;
