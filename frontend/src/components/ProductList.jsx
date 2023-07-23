import { Link } from "react-router-dom";

const ProductList = ({products}) => {
    
    return (  
       <div >
                 
       {products.map( product =>(               
        <div  key={product.id}>          
         <Link to={ `/products/${product._id}`}>
          <h2>{product.name}</h2>  
          <h3>{product.price}</h3>        
          <p>Category: {product.category}</p>
         </Link>           
        </div>
       ))}
      
       </div> 
    );
}
 
export default ProductList;
