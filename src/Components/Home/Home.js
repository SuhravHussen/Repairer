import React from "react";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MyTeam from "./MyTeam/MyTeam";
import Review from "./Reviews/Review";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Review />
      <MyTeam></MyTeam>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
