import { ProductArray } from "../ProductStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ProductArray.map((product, idx) => (
          <div className="flex justify-center" key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
