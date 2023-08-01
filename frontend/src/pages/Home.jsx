import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductArray } from "../ProductStore";
import lotus from "../images/lotus.png";
 

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
         <div className="lg:mt-[-30px] text-center ">  
          <h1 className="text-[50px] mx-auto text-violet-50 lg:text-[70px]">~ Welcome to Lotus ~</h1>
          <img className="w-[75%] h-auto mx-auto m-5 lg:w-[38%]" src={lotus} />
          <p className="text-violet-50 mt-10 lg:text-[35px]">The superior E-commerce experience</p>
          </div>
          <h2 className="text-center text-violet-50 text-[30px] mt-12 mb-[-25px] lg:text-[55px] lg:mt-[150px]">What are you looking for?</h2>
          <div className="flex flex-col justify-evenly m-10 h-[85rem] text-violet-50 lg:flex-row lg:mt-12">
           <Link  to="./pages/TshirtList" className="flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl lg:w-[18%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500">
            <div>
              <h2 className="">T-Shirts</h2>
            </div>
            </Link>
            <Link to="./pages/JeansList" className="flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl lg:w-[18%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500">
            <div>
              <h2>Jeans</h2>
            </div>
            </Link>
            <Link to="./pages/ShoesList" className="flex flex-col items-center justify-center border-2 border-violet-50 m-5 h-[40%] text-[25px] rounded-xl  lg:w-[18%] transition-ease-in-out delay-0 hover:transform hover:translate-x-4 hover:translate-y-4 duration-500">
            <div>
              <h2>Shoes</h2>
            </div>
            </Link>
          </div>
    </div>   
  );
};

export default Home;
