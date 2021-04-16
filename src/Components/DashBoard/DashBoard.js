import React, { useEffect, useState } from 'react';
import Sidebar from './SideBAr/Sidebar';
import './DashBoard.css'
import Booknow from './Booknow/Booknow';
import { useParams } from 'react-router';
import fakeData from '../../fakedata'
const DashBoard = () => {
 const [service, setService] =  useState({})
   const {id} = useParams()
   useEffect(()=>{
     const  myService = fakeData.filter(ser=> ser.id==id)
     setService(myService[0]) 
   },[])
    
  
  
    return (
        <section className="dashBoard">
          <div className="sidebar">
<Sidebar></Sidebar>
          </div>
          <div className="book">
          { id!=='id' && <div>  <h1>Payment for {service.name}</h1>
           <Booknow data={service} ></Booknow>
           </div>}
           {
             id =='id' && <div>
               <h1>Please Select any Service</h1>
             </div>
           }
          </div>
        </section>
    );
};

export default DashBoard;