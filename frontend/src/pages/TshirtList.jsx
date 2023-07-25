import ProductList from "../components/ProductList";
import { useState,useEffect } from "react";
import axios from 'axios';

const TshirtList = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5050/allproducts")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    },[])
    

    return ( 
       <div className="bg-gradient-to-r from-violet-200 to-violet-400">
          <ProductList products={products} />
       </div>
     );
}
 
export default TshirtList;