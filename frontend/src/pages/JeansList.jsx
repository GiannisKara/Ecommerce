import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filter";
import ProductList from "../components/ProductList";

const JeanstList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    let apiUrl = `http://localhost:5050/allproducts?page=${page}&category=Jean`;

    if (sortByPrice) {
      apiUrl += `&sort=Price&direction=${sortDirection}`; // Use "Price" instead of "price"
    }

    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data && res.data.items && res.data.pagination) {
          setProducts(res.data.items);
          setPageCount(res.data.pagination.pageCount);
        } else {
          console.error("Invalid response format:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [page, sortByPrice, sortDirection]);

  const handlePrevious = () => {
    setPage((p) => (p === 1 ? p : p - 1));
  };

  const handleNext = () => {
    setPage((p) => (p === pageCount ? p : p + 1));
  };

  const toggleSortByPrice = () => {
    setSortByPrice((prev) => !prev);
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="bg-gradient-to-r from-violet-200 to-violet-400 min-h-screen min-w-screen">
      <Filters />
      <ProductList
        products={products.filter((product) => product.Category === "Jean")}
      />
      <div className=" mt-[100px] mx-auto text-center ">
        <button
          onClick={toggleSortByPrice}
          className="m-5 text-violet-50 text-[20px] transition ease-in-out hover:text-violet-600 duration-500"
        >
          Sort by Price
        </button>
        <button
          onClick={toggleSortDirection}
          className="m-5 text-violet-50 text-[20px] transition ease-in-out hover:text-violet-600 duration-500"
        >
          {sortDirection === "asc" ? "Sort Ascending" : "Sort Descending"}
        </button>
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          className="m-5 text-violet-50 text-[20px] transition ease-in-out hover:text-violet-600 duration-500"
          style={{ opacity: page === 1 ? 0.5 : 1 }}
        >
          Previous
        </button>
        <span className="text-violet-50 text-[20px]">{page}</span>
        <span className="text-violet-50 text-[20px]">/</span>
        <span className="text-violet-50 text-[20px]">{pageCount}</span>
        <button
          disabled={page === pageCount}
          onClick={handleNext}
          className="m-5 text-violet-50 text-[20px] transition ease-in-out hover:text-violet-600 duration-500"
          style={{ opacity: page === pageCount ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JeanstList;
