import React, { useEffect, useState } from 'react';

import Service from './Service/Service';
import './Services.css'
const Services = () => {
   const [services , setServices] = useState([])
   useEffect(()=>{
    fetch("https://safe-depths-29401.herokuapp.com/services")
    .then(res=>res.json())
    .then(data=>setServices(data))
   },[])
    return (
        <div className="services-container">
          <h1>Our Services</h1>
          <div className="all-services">
              {
                  services.map(service=><Service data={service}></Service>)
              }
          </div>
        </div>
    );
};

export default Services;