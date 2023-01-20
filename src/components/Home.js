import { Link } from "react-router-dom";
import yogaClassImg from "../img/yoga-class.jpg";
import React from "react";

const Home = () => {
    return (
      <div>
        <div>
          <p>2023 Fitness Collection</p>
          <Link to="/shop">Shop Now</Link>
        </div>
        <img src={yogaClassImg} alt="People in yoga class"/>
      </div>
    );
  }
  
  export default Home;