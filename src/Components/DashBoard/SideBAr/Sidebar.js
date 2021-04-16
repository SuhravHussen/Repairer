import React, { useState } from 'react';
import './Sidebar.css'
import booking  from '../../../Images/booking.png'
import list from '../../../Images/list.png'
import review from '../../../Images/review.png'
import add from '../../../Images/add.png'
import adduser from '../../../Images/add-user.png'
import { Link } from 'react-router-dom';
const Sidebar = () => {
   
  const[isAdmin , setisAdmin] =  useState(false)
   
    return (
        <div className="sidebar-container">
            <h3>Dashboard</h3>
            <ul>
                <li style={{color:'white'}}><img src={booking} alt="" /> Book</li>
           <Link to='/bookingList'>   <li  style={{color:'white'}}><img src={list} alt=""/> Booking List</li>  </Link> 
           <Link to='/giveReview'>    <li  style={{color:'white'}}><img src={review} alt=""/> Review</li> </Link> 
           
           
           
           <Link to='/addAdmin'>    <li  style={{color:'white'}}><img src={adduser} alt=""/> Add Admin</li> </Link> 
           <Link to='/allBookings'>    <li  style={{color:'white'}}><img src={list} alt=""/> Booking List</li> </Link> 
           <Link to='/addService'>    <li  style={{color:'white'}}><img src={add} alt=""/> Add Services</li> </Link> 
            </ul>
        </div>
    );
};

export default Sidebar;