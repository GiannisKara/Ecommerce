import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Singleproduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    //localStorage.removeItem(`SIZE_${_id}`);
    axios
      .get(`http://localhost:5050/products/${_id}`)
      .then((res) => {
        setProduct(res.data, res.data.id);
        const savedSize = localStorage.getItem(`SIZE_${_id}`);

        if (savedSize) {
          setSize(savedSize);
        }
      })
      .catch((err) => console.log(err));
  }, [_id]);
  const handleSizeChange = (newSize) => {
    setSize(newSize);
    localStorage.setItem(`SIZE_${_id}`, newSize);
  };
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleNavigate = () =>{
    navigate(-1)
  }

  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
        <button className="text-violet-50 text-[28px] transition easy-in-out delay-100 hover:underline duration-500" onClick={handleNavigate}><div className="flex justify-center items-center"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 448 512"><path fill="white" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>Back</div></button>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:m-[100px] m-3 text-violet-50">
          <div>
            <img
              src={`http://localhost:5050/images/${product.image}`}
              alt={product.name}
              className=" w-30 h-30 object-cover"
            />
          </div>
          <div className="flex flex-col lg:w-[80%] w-[fit-content] text-center ">
            <h1 className="text-[30px] mb-5">{product.name}</h1>
            <p className="ml-5">{product.description} </p>
            <p className="mt-10 text-[25px]">Price:</p>
            <p className="text-[25px]">${product.price}</p>
            <h3 className="mt-10">Select Size:</h3>
            <div className="flex flex-row items-center justify-center p-3">
              <div
                className="p-3 overflow-hidden"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <input
                  onClick={() => handleSizeChange("XS")}
                  className={`p-3 overflow-hidden text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    size ? "disabled-size" : ""
                  }`}
                  type="radio"
                  id="XS"
                  name="size"
                  value="XS"
                />
                <label className="p-2" htmlFor="XS">
                  XS
                </label>
              </div>
              <div className=" overflow-hidden p-3">
                <input
                  onClick={() => handleSizeChange("S")}
                  className={`p-3 overflow-hidden text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    size ? "disabled-size" : ""
                  }`}
                  type="radio"
                  id="S"
                  name="size"
                  value="S"
                />

                <label className="p-2" htmlFor="S">
                  S
                </label>
              </div>
              <div className="p-3 overflow-hidden">
                <input
                  onClick={() => handleSizeChange("M")}
                  className={`p-3 overflow-hidden text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    size ? "disabled-size" : ""
                  }`}
                  type="radio"
                  id="M"
                  name="size"
                  value="M"
                />
                <label className="p-2" htmlFor="M">
                  M
                </label>
              </div>
              <div className="p-3 overflow-hidden">
                <input
                  onClick={() => handleSizeChange("L")}
                  className={`p-3 overflow-hidden text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    size ? "disabled-size" : ""
                  }`}
                  type="radio"
                  id="L"
                  name="size"
                  value="L"
                />
                <label className="p-2" htmlFor="L">
                  L
                </label>
              </div>
              <div className="p-3 overflow-hidden">
                <input
                  onClick={() => handleSizeChange("XL")}
                  className={`p-3 overflow-hidden text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    size ? "disabled-size" : ""
                  }`}
                  type="radio"
                  id="XL"
                  name="size"
                  value="XL"
                />
                <label className="p-2" htmlFor="XL">
                  XL
                </label>
              </div>
            </div>

            <div key={product.id} disabled={size} onChange={handleSizeChange}>
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
