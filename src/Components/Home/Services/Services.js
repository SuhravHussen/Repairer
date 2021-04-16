import React, { useEffect, useState } from 'react';

import Service from './Service/Service';
import './Services.css'
import fakeData from '../../../fakedata'
const Services = () => {
   const [services , setServices] = useState([])
   useEffect(()=>{
       setServices(fakeData)
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