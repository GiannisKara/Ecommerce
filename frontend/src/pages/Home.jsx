import { Link } from "react-router-dom";

import lotus from "../images/lotus.png";
import jeans from "../images/jeans.png";
import tshirt from "../images/nike blue t-shirt.png";
import shoes from "../images/jordan1.png";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
      <div className="lg:mt-[-30px] text-center ">
        <h1 className="text-[50px] mx-auto text-violet-50 lg:text-[70px]">
          ~ Welcome to Lotus ~
        </h1>
        <img
          className="w-[75%] h-auto mx-auto m-5 lg:w-[38%]"
          src={lotus}
          alt=""
        />
        <p className="text-violet-50 mt-10 lg:text-[35px]">
          The superior E-commerce experience
        </p>
      </div>
      <h2 className="text-center text-violet-50 text-[30px] mt-12 mb-[-25px] lg:text-[55px] lg:mt-[150px]">
        What are you looking for?
      </h2>
      <div className="flex flex-col justify-evenly m-10 h-[85rem] text-violet-50 lg:flex-row lg:mt-12 ">
        <Link
          to="./pages/TshirtList"
          className="relative flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl lg:w-[25%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500"
        >
          <h2 className="z-0 flex absolute text-violet-50 border w-full h-full items-center justify-center bg-violet-600 bg-opacity-40">
            T-Shirts
          </h2>
          <img
            className="h-full w-full z-2 object-cover"
            src={tshirt}
            alt=""
          ></img>
        </Link>
        <Link
          to="./pages/JeansList"
          className="relative flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl lg:w-[25%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500"
        >
          <h2 className="z-0 flex absolute text-violet-50 border w-full h-full items-center justify-center bg-violet-600 bg-opacity-40">
            Jeans
          </h2>
          <img
            className="h-full w-full z-2 object-cover"
            src={jeans}
            alt=""
          ></img>
        </Link>
        <Link
          to="./pages/ShoesList"
          className="relative flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl  lg:w-[25%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500"
        >
          <h2 className="z-0 flex absolute text-violet-50 border w-full h-full items-center justify-center bg-violet-600 bg-opacity-40">
            Shoes
          </h2>
          <img
            className="h-full w-full z-2 object-cover"
            src={shoes}
            alt=""
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Home;
