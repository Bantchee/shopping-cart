import { Link } from "react-router-dom";
import yogaClassImg from "../img/yoga-class.jpg";
import React from "react";

const Home = () => {
    return (
      <div
        className="relative flex justify-center items-center text-xl
            md:mx-16 md:text-1xl
            lg:mx-32 md:text-4xl"
      >
        <div
          className="absolute my-auto mx-auto text-neutral-800 font-bold flex flex-col items-center justify-center
                      bg-white w-[100%] h-[100%] bg-opacity-20 gap-2"
        >
          <p
            className="text-neutral-900"
          >
            2023 Fitness Collection
          </p>
          <Link 
            to="/shop"
            className="bg-cyan-600 hover:bg-cyan-400 px-2 rounded-full
                        md:px-4 py-2"
          >Shop Now</Link>
        </div>
        <img 
          src={yogaClassImg} 
          alt="People in yoga class"
          className=" -z-10"
          />
        
      </div>
    );
  }
  
  export default Home;