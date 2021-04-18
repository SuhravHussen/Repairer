import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userContext } from "../../../App";
import { useForm } from "react-hook-form";
import "./cardform.css";
const Cardform = ({ data }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useContext(userContext);
  const [paymentInfo, setPaymentInfo] = useState({});
  const [newInfo, setNewInfo] = useState({});

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      setPaymentInfo(paymentMethod);
      handlePayment();
    }
  };
  const onSubmit = (data) => {
    setNewInfo(data);
  };

  const handlePayment = () => {
    const orderData = {
      email: newInfo.email,
      service: data.name,
      price: data.price,
      paymentId: paymentInfo.id,
    };
    console.log(orderData);

    fetch("https://safe-depths-29401.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => alert("Your booking added successfully"));
  };
  return (
    <div>
      {!newInfo.name && (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          name <input defaultValue={userInfo.name} {...register("name")} />
          email{" "}
          <input
            defaultValue={userInfo.email}
            {...register("email", { required: true })}
          />
          service <input defaultValue={data.name} />
          <input className="Primary-btn" type="submit" />
        </form>
      )}

      {newInfo.name && (
        <form onSubmit={handleSubmitPayment}>
          <CardElement />
          <button className="Primary-btn" type="submit" disabled={!stripe}>
            Pay Now
          </button>
          <h6>You will be charged {data.price}$</h6>
        </form>
      )}
    </div>
  );
};

export default Cardform;
