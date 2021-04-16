import React from 'react';
import Sidebar from '../SideBAr/Sidebar';

const AllBooking = () => {
    return (
        <section className="dashBoard">
        <div className="sidebar">
<Sidebar></Sidebar>
        </div>
        <div className="book">
           <h1>all orders</h1>
        </div>
      </section>
    );
};

export default AllBooking;