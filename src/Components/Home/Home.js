import React from 'react';
import Header from './Header/Header';
import Review from './Reviews/Review';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Services></Services>
          <Review/>
        </div>
    );
};

export default Home;