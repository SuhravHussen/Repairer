import React from "react";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./myteam.css";
const MyTeam = () => {
  const imgStyle = {
    height: "250px",
    width: "200px",
    backgroundColor: "white",
  };
  const iconStyle = {
    color: "green",
    fontSize: "25px",
  };

  const members = [
    {
      name: " daniel brown",
      role: "Founder",
      img:
        "https://image.freepik.com/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg",
    },
    {
      name: " Jhon",
      role: "Manager",
      img:
        "https://image.freepik.com/free-photo/modern-technology-electronic-devices-concept-stylish-positive-young-male-manager-using-digital-tablet-work-businessman-formal-wear-holding-touch-pad-portable-computer_343059-4593.jpg",
    },
    {
      name: "cris Handerson",
      role: "Handy Man",
      img:
        "https://image.freepik.com/free-photo/plumber-with-his-arms-crossed_1368-515.jpg",
    },
    {
      name: "Jason Holder",
      role: "Plumber",
      img:
        "https://image.freepik.com/free-photo/young-handsome-repairman-blue-overall-yellow-helmet-holding-toolbox-wrench-bearded-plumber-standing-isolated-color-wall-man-working-holds-toolbox-with-instrument_176532-13862.jpg",
    },
    {
      name: "Das Morisson",
      role: "Painter",
      img:
        "https://image.freepik.com/free-photo/portrait-repairer-woman-with-painting-roller-isolated_1303-14259.jpg",
    },
    {
      name: "Shon Mars",
      role: "Electrician",
      img:
        "https://image.freepik.com/free-photo/young-electrician-man-isolated-wall_1368-74506.jpg",
    },
    {
      name: "Lara croft",
      role: "Cleaner",
      img:
        "https://image.freepik.com/free-photo/housekeeper-holding-bottle-with-cleaner-liquid-hands_176532-11227.jpg",
    },
    {
      name: "Jack Snider ",
      role: "Electrician",
      img:
        "https://image.freepik.com/free-photo/portrait-young-man-driving-his-car-his-way-work-transport-concept_58466-14993.jpg",
    },
  ];

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="row text-center">
        {members.map((member) => {
          return (
            <div className="single-member col-xl-2 col-sm-6 mb-5 m-3">
              <div className="bg-white rounded  py-5 px-2">
                <img
                  src={member.img}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">{member.name}</h5>
                <span className="small text-uppercase text-muted">
                  {member.role}
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      {" "}
                      <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FontAwesomeIcon style={iconStyle} icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FontAwesomeIcon style={iconStyle} icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTeam;
