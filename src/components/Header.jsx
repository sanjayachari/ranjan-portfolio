import React from "react";
import Cv from "./Cv";
import data from "./data.json";
import prof from "../image/prof.png";
import "./header.css";

const Header = () => {
  return (
    
    <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 h-[680px] md:h-[750px]">
      {
        <div className=" fo col-span-1 ">
        <div className="flex justify-center items-center h-full ">

          <img
            src={prof}
            alt="profilepicture"
            className="mt-5 h-[440px] md:h-[500px] w-[280px] md:w-[300px] image shadow-2xl "
          />
        </div>

        </div>
      }

      <div className="col-span-2  fo">
        <div className="flex h-full  flex-col justify-center items-center ">

        <h1 className="mt-3 md:mt-0 text-[17px] md:text-2xl text-start ">{data[0].intro}</h1>
        <h1 className="text-3xl md:text-6xl  m-1 font-bold ">{data[0].name}</h1>
        <h1 className="text-[20px] md:text-2xl m-1 shadow-lg">{data[0].role}</h1>
        <Cv />

      </div>
      </div>
    </div>
  );
};

export default Header;
