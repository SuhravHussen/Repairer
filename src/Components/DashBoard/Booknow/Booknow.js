import React from "react";
import "./Booknow.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import Cardform from "../CardForm/Cardform";
const stripePromise = loadStripe(
  "pk_test_51IgRHzETgcpaw1ztz26qPxAnhB7D7l4HBnCnxwOA9b9mzBsgAUH1jnDCZHusNwdf8cm3TzxNNrx6bylIj2M3odCM00Dg5EsIht"
);
const Booknow = ({ data }) => {
  return (
    <Elements stripe={stripePromise}>
      <Cardform data={data}></Cardform>
    </Elements>
  );
};

export default Booknow;
