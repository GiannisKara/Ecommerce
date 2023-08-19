import axios from "axios";
import { useEffect, useState } from "react";
import shoes from "../images/jordan1.png";
import tshirt from "../images/nike blue t-shirt.png";
import jeans from "../images/jeans.png";


const Carousel = ( { slides } ) => {
  
  return ( 
    <div className="">
      <div className="flex "> 
        {slides}
       
      </div>
    </div>
   );
}
 
export default Carousel;