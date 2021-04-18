import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faShieldAlt,
  faHandPointRight,
  faTag,
  faSignal,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const iconStyle = {
    color: "steelblue",
    fontSize: "30px",
  };
  return (
    <div className="facility-container">
      <h1> Our Facility</h1>

      <section className="style-1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faClock} />
                <h3 className="h3">On Time</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faShieldAlt} />
                <h3 className="h3">Security</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faHandPointRight} />
                <h3 className="h3">24/7 Hour</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faTag} />
                <h3 className="h3">Lowest Price</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faSignal} />
                <h3 className="h3">Online Reservation</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-service">
                <FontAwesomeIcon style={iconStyle} icon={faTachometerAlt} />
                <h3 className="h3">Guarantee</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </p>
                <a href="" className="border-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
