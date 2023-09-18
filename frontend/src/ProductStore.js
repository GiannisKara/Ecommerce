import { useEffect, useState } from "react";
import axios from "axios";

function useProductData() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductFromDatabase = () => {
      axios
        .get(`http://localhost:5050/allproducts`) 
        .then((res) => setProductData(res.data))
        .catch((err) => console.log(err));
    };

    fetchProductFromDatabase();
  }, []);

  return productData;
}

export { useProductData };

function ProductDetail({ match }) {
  const [productData, setProductData] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5050/products/${productId}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  return productData;
}

export default ProductDetail;
