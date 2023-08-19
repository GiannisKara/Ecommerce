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
      .get(`http://localhost:5050/allproducts?page=${page}&category=Shoes`)
      .then((res) => {
        if (res.data && res.data.items && res.data.pagination) {
          setProducts(res.data.items);
          setPageCount(res.data.pagination.pageCount);
        } else {
          console.error("Invalid response format:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handlePrevious = () => {
    setPage((p) => (p === 1 ? p : p - 1));
  };

  const handleNext = () => {
    setPage((p) => (p === pageCount ? p : p + 1));
  };

  return (
    <div className="bg-gradient-to-r from-violet-200 to-violet-400">
      <Filters />
      <ProductList
        products={products.filter((product) => product.Category === "Shoes")}
      />
      <div className="m-10 border mx-auto text-center">
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          className="m-2"
          style={{ opacity: page === 1 ? 0.5 : 1 }}
        >
          Previous
        </button>
        <span>{page}</span>
        <span className="text-violet-50 text-[50px]">{pageCount}</span>
        <button
          disabled={page === pageCount}
          onClick={handleNext}
          className="m-2"
          style={{ opacity: page === pageCount ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TshirtList;
