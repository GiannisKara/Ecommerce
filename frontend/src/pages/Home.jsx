import { Link } from "react-router-dom";

import { ProductArray } from "../ProductStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
      <div className="flex flex-row w-screen lg:w-[65%] left-0  mx-auto p-3 mt-3">
        <div className="flex flex-col left-0 min-w-[fit-content] ">
          <div className="bg-violet-500 bg-opacity-25 rounded p-10 lg:text-[20px] sm:w-[fit-content] text-[13px]">
            <h2 className="pb-6 text-violet-50">Categories</h2>
            <ul className="list-none ">
              <li className="pb-5">
                <Link
                  className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
                  to="/pages/TshirtList"
                >
                  T-shirts
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
                  to="/pages/JeansList"
                >
                  Jeans
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
                  to="/pages/ShoesList"
                >
                  Shoes
                </Link>
              </li>
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

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-hidden">
            {ProductArray.map((product, idx) => (
              <div className="flex justify-center" key={idx}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
