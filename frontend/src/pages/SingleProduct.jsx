import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Singleproduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
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
  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
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
            <p>{product.description} </p>
            <p>{product.price}</p>
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
                  className={`p-3 overflow-hidden ${
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
                  className={`p-3 overflow-hidden ${
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
                  className={`p-3 overflow-hidden ${
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
                  className={`p-3 overflow-hidden ${
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
                  className={`p-3 overflow-hidden ${
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
