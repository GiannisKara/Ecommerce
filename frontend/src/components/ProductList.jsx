import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ProductList = ({ products }) => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5050/allproducts?page=${page}/${id}`)
      .catch((err) => console.log(err));
    window.location.reload();
  };

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
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 m-5 lg:ml-10 text-center w-screen ">
      {products.map((product) => (
        <div
          className="m-3 p-5 w-[20rem] lg:w-[30rem] h-[max-content]  transition-ease-in-out delay-0 hover:transform hover:scale-95 duration-500"
          key={product._id}
        >
          <Link to={`/products/${product._id}`}>
            <img
              className="lg:h-[28rem] w-auto mx-auto rounded h-[22rem] object-cover"
              src={`http://localhost:5050/images/${product.image}`}
              alt={product.Name}
            />
            <h2 className="text-[30px] mt-5">{product.Name}</h2>
            <h3> ${product.Price} </h3>
          </Link>
          {/*<button className="border border-red-700" onClick={() => handleDelete(product._id)}>Delete</button>*/}
          
        </div>
      ))}
       {/*<div className="m-10   border mx-auto">
        
        <button disabled={page === 1} onClick={handlePrevious} className="m-2">Previous</button> 
        <button disabled={page === pageCount} onClick={handleNext} className="m-2">Next</button>
        
       </div> */}
    </div>
  );
};

export default ProductList;
