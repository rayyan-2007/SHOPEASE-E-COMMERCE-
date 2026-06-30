import { useState } from "react";

const ProductCard = ({
  Product: {name,price,image,ratings},
  setcounter,
  counter,


}) => {
  const [click, setclick] = useState(false);
  
   function addtocart() {
     setcounter(counter + 1);
     setclick(true);
   }

   function removefromcart() {
     setcounter(counter - 1);
     setclick(false);
   }
          
  return (
    <>
      <div className="Card-container">

        <div className="card-image">
          <img src={image} alt={name} />
        </div>

        <div className="product-content">
          <h4>{name}</h4>
          <h4>{price}</h4>
          <h4>{ratings}</h4>
        </div>
         
    
        <div className="card-footer">
          {
        click? 
        <button className="cartbtn"  onClick={removefromcart}>Remove From Cart</button> 
        :
        <button className="cartbtn" onClick={addtocart}>Add to Cart</button>
          }
        </div>
          

      </div>
    </>
  );
}


export default ProductCard
