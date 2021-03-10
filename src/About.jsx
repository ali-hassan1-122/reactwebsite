import React from "react";
import { NavLink } from "react-router-dom";
import about from "../src/images/about1.svg";
import Common from './Common';



const  About = () =>  {
      return (
            <Common name="Welcome to About Page" imgsrc={about} visit="/contact" btnname="Contact Now" />
        );
}

export default About;
