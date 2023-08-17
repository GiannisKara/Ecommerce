import { Link } from "react-router-dom";
import { useState } from "react";


const Filters = () => {
   const [arrow, setArrow] = useState ("M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"); 
   const [isOpen, setIsOpen] = useState(false);


   const handleCategoryMenu = () => {
     if(arrow==="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" && isOpen === false){
        setArrow("M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z");
        setIsOpen(true);
     } else  {
        setArrow("M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
        setIsOpen(false)
     }
   }

    return ( 
        <div className="ml-10 lg:ml-auto mt-10 h-[5rem] lg:w-[60%] mx-auto overflow-hidden">
          
          <div className="text-violet-600  w-[fit-content] ">
          <button onClick={handleCategoryMenu}  className="-z-1 flex items-center border-2 border-violet-600 rounded-lg bg-violet-100 p-2 lg:text-[18px] text-[14px] focus:outline-none justify-center lg:w-[13rem]">Categories<svg className="ml-5" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path fill="purple" d={arrow}/></svg></button>
           { isOpen && <button onClick={()=>{setIsOpen(false); setArrow("M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z")}} 
           className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-violet-800 bg-opacity-0 z-1">
            </button>}
           { isOpen && <div className="z-0 bg-violet-100 rounded-lg text-[18px]  shadow-xl absolute w-[13rem] text-center mx-auto ">
            <Link to="../pages/TshirtList" className="block p-3 hover:bg-violet-600 hover:text-violet-50" >T-Shirts</Link>
            <Link to="../pages/JeansList" className="block p-3 hover:bg-violet-600 hover:text-violet-50">Jeans</Link>
            <Link to="../pages/ShoesList" className="block p-3 hover:bg-violet-600 hover:text-violet-50">Shoes</Link>
           </div> }
          </div>

        </div>
     );
}
 
export default Filters;
