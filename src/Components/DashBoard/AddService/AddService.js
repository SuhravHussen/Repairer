import React, { useState } from "react";
import Sidebar from "../SideBAr/Sidebar";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddService = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [newService, setNewService] = useState({
    name: "",
    price: "",
  });

  const handleBlur = (e) => {
    const newInfo = { ...newService };
    newInfo[e.target.name] = e.target.value;
    setNewService(newInfo);
    console.log(newInfo);
  };
  const handleFileChange = (e) => {
    const imageData = new FormData();
    imageData.set("key", "3538107b1badcdc616bc92b313cfff36");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      name: newService.name,
      imageUrl: imageUrl,
      price: newService.price,
    };
    const url = `https://safe-depths-29401.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log(res));
  };
  return (
    <section className="dashBoard">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="book">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Enter Service</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Service"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Price</label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="Primary-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
<h1>Add service</h1>;
