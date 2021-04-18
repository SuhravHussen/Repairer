import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";
const Service = ({ data }) => {
  const history = useHistory();
  const handleBooking = () => {
    history.push("/dashboard/" + _id);
  };
  const { name, price, imageUrl, _id } = data;
  return (
    <div className="card">
      <img src={imageUrl} alt="servicimage" />
      <div className="info">
        <h1>{name}</h1>
        <p>
          Lorem Ipsum is simply dummy text from the printing and typeseting
          industry
        </p>
        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default Service;
