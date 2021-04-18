import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { userContext } from "../../../App";
import Sidebar from "../SideBAr/Sidebar";

const BookingsList = () => {
  const [userInfo] = useContext(userContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(
      "https://safe-depths-29401.herokuapp.com/myBookings?email=" +
        userInfo.email
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <section className="dashBoard">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="book">
        <h1 style={{ marginBottom: "20px" }}>Your Bookings</h1>
        <Table style={{ height: "60%" }} striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>price</th>
              <th>Email</th>
              <th>payment ID</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((ser) => {
              return (
                <tr>
                  <td>{ser.service}</td>
                  <td>{ser.price}</td>
                  <td>{ser.email}</td>
                  <td>{ser.paymentId}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default BookingsList;
<h1>bookings</h1>;
