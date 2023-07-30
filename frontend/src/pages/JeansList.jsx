import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filter";

const TshirtList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/allproducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <div className="bg-gradient-to-r from-violet-200 to-violet-400">
      <Filters />
      <ProductList products={products.filter((product)=>product.Category === 'Jean')} />
    </div>
  );
};

export default TshirtList;
