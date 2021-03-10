import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.png";
import Common from './Common';



const  Home = () =>  {
  return (
      <Common name="Grow your Business with" imgsrc={web} visit="/service" btnname="Get Started" />
  );
}

export default Home;
