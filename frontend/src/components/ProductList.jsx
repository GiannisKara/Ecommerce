import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5050/allproducts/${id}`)
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-5 text-center">
      {products.map((product) => (
        <div
          className="m-3 p-5  mx-auto   w-[30rem] h-[max-content]"
          key={product._id}
        >
          <Link to={`/products/${product._id}`}>
            <img
              className="h-[28rem] w-auto mx-auto rounded"
              src={`http://localhost:5050/images/${product.image}`}
              alt={product.Name}
            />
            <h2 className="text-[30px] mt-5">{product.Name}</h2>
            <h3> ${product.Price} </h3>
          </Link>
          {/*<button className="border border-red-700" onClick={() => handleDelete(product._id)}>Delete</button>*/}

          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
