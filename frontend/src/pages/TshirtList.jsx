import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filter";

const TshirtList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/allproducts?page=${page}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect (() => {
    if(products){
      products.map(()=> {
        setPageCount(pageCount+1)
      })
    }
  },[products])

  const handlePrevious = () => {
    setPage((p)=> {
      if(p === 1 ) return p;
      return p-1;
    });
  }

  const handleNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1; 
    });
  }

  return (
    <div className="bg-gradient-to-r from-violet-200 to-violet-400">
      <Filters />
      <ProductList
        products={products.filter((product) => product.Category === "Tshirt")}
      />
       <div className="m-10 border mx-auto text-center">
        
        <button disabled={page === 1} onClick={handlePrevious} className="m-2">Previous</button> 
        <span>{page}</span>
        <span className="text-violet-50 text-[50px]">{pageCount}</span>
        <button disabled={page === pageCount} onClick={handleNext} className="m-2">Next</button>

       </div> 
    </div>
  );
};

export default TshirtList;
