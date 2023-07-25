import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartConstext";

const ProductList = ({products}) => {
    
    return (  
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 m-5 text-center" >
                 
       {products.map( product =>(               
        <div className="m-5 p-5  mx-auto border-2 rounded border-violet-50 min-w-[fit-content] w-[15rem]"  key={product._id}>          
         <Link to={ `/products/${product._id}`}>
          <h2 className="text-[30px] ">{product.Name}</h2>  
          <h3>Price: ${product.Price} </h3>        
          <p>Category: {product.Category}</p>
         </Link>           
        </div>
       ))}
      
       </div> 
    );
}
 
export default ProductList;
