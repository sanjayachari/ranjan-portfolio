import React from "react";
import Cv from "./Cv";
import data from "./data.json";
import profPic from "../image/profPic.jpg";
import ranjImg from "../image/ranjImg.jpg";
import "./header.css";
import bgV from '../image/bgV.mp4'


const Header = () => {
  return (
    <>
    <div className="main" id="home">
    <div className="overlay"></div>
    <video src={bgV} autoPlay loop muted />



    
    
    <div className=" flex flex-col justify-center items-center h-[750px] text-center md:h-[750px] content text-gray-300">
      {
        <div className=" fo  ">
        <div className="flex justify-center items-center h-full ">

          <img
            src={ranjImg}
            alt="profilepicture"
            className="mt-5 h-[200px] md:h-[250px] w-[200px] md:w-[250px] image shadow-2xl border border-white"
          />
        </div>

        </div>
      }

      <div className=" m-3 fo">
        <div className="flex h-full  flex-col justify-center items-center ">

        <h1 className="ms-0 mt-3 md:mt-2 text-[17px] md:text-2xl text-start ">{data[0].intro}</h1>
        <h1 className="text-3xl md:text-6xl  m-1 font-bold ">{data[0].name}</h1>
        <h1 className="text-[20px] md:text-2xl m-1 shadow-lg">{data[0].role}</h1>
        <Cv />

      </div>
      </div>
    </div>
    </div>

    </>
  );
};

export default Header;
