import React, { useEffect, useState } from "react";
import Sidebar from "./SideBAr/Sidebar";
import "./DashBoard.css";
import Booknow from "./Booknow/Booknow";
import { useParams } from "react-router";

const DashBoard = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://safe-depths-29401.herokuapp.com/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="dashBoard">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="book">
        {id !== "id" && (
          <div>
            {" "}
            <h1>Payment for {service.name}</h1>
            <Booknow data={service}></Booknow>
          </div>
        )}
        {id == "id" && (
          <div>
            <h1>Please Select any Service</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashBoard;
