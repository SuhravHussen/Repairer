import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import booking  from '../../../Images/booking.png'
import list from '../../../Images/list.png'
import review from '../../../Images/review.png'
import add from '../../../Images/add.png'
import adduser from '../../../Images/add-user.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
const Sidebar = () => {
   
const [userInfo ,setUserInfo] = useContext(userContext) 
  const[isAdmin , setisAdmin] =  useState(null)
   
   useEffect(()=>{
    fetch("http://localhost:4000/findAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({email: userInfo.email}),
      })
        .then((res) => res.json())
        .then((data) =>setisAdmin(data));
        
   },[])

    return (
        <div className="sidebar-container">
            <h3>Dashboard</h3>
        {!isAdmin &&    
            <ul>
          <li style={{color:'white'}}><img src={booking} alt="" /> Book</li>
           <Link to='/bookingList'>   <li  style={{color:'white'}}><img src={list} alt=""/> Booking List</li>  </Link> 
           <Link to='/giveReview'>    <li  style={{color:'white'}}><img src={review} alt=""/> Review</li> </Link> 
           </ul>
        }  
        { isAdmin &&
        <ul> 
           <Link to='/addAdmin'>    <li  style={{color:'white'}}><img src={adduser} alt=""/> Add Admin</li> </Link> 
           <Link to='/allBookings'>    <li  style={{color:'white'}}><img src={list} alt=""/> Booking List</li> </Link> 
           <Link to='/addService'>    <li  style={{color:'white'}}><img src={add} alt=""/> Add Services</li> </Link> 
           </ul> } 
        </div>
    );
};

export default Sidebar;