import { Link } from "react-router-dom";
import tshirt1 from "../images/t-shirt-1.png";

const Home = () => {
    return ( 
    
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">

        <div className="flex flex-row w-screen lg:w-[65%] left-0  mx-auto p-3 mt-3"> 
          <div className="flex flex-col left-0 min-w-[fit-content] ">
               <div className="bg-violet-500 bg-opacity-25 rounded p-10 lg:text-[20px] sm:w-[fit-content] text-[13px]"> 
                  <h2 className="pb-6 text-violet-50">Categories</h2>
                    <ul className="list-none">
                        <li className="pb-5"><Link className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700" to="/">T-shirts</Link></li>
                        <li className="pb-5"><Link className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700" to="/">Jeans</Link></li>
                        <li className="pb-5"><Link className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700" to="/">Shoes</Link></li>
                    </ul>  
               </div>
               <div className="bg-violet-500 bg-opacity-25 rounded p-10 text-[13px] lg:text-[20px] mt-5 "> 
                  <h2 className="pb-6 text-violet-50">Filters</h2>
                    <ul className="list-none">
                        <li className="pb-5 text-violet-50">Price</li>
                        <li className="pb-5 text-violet-50">Size</li>
                        <li className="pb-5 text-violet-50">Color</li>
                    </ul>  
               </div>
               
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-10 mx-auto grid-cols-1 pl-10 ">
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
               <div className="flex flex-row justify-between items-center w-[100%] text-[18px]"> 
                <h3>Product1</h3>
                <button className=' p-2 rounded-full transition ease-in-out delay-0 hover:bg-violet-600 duration-700 '>  
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#f1f1f1" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg> 
                </button>
               </div>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
                <h3>Product1</h3>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
                <h3>Product1</h3>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
                <h3>Product1</h3>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
                <h3>Product1</h3>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            <div className="card border border-violet-50 rounded p-3 h-[fit-content] flex flex-col text-center">
                <h3>Product1</h3>
                <img className="h-auto p-3 w-[50rem] "  src={tshirt1} />
                <span>Price: 22$</span>
            </div>
            

          </div>
        </div>
        
    </div>
   
 

    );
}
 
export default Home;