
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
 import Productdata from "./productdata";
import { useState } from "react";
import Banner from "./Components/Banner";


const App = () => {
         const [counter, setcounter] = useState(0);
  return (
    <>
      <Navbar counter={counter} />

      <Banner/>
      <div className="parent">
        <div className="products-container">
          {Productdata.map((product) => (
            <ProductCard key={product.id} Product={product} setcounter={setcounter} counter={counter} />
          ))}
        </div>

        <footer>
          <ul>
            <li>SHOPEASE Premium Smartwatches for Every Lifestyle.</li>
            <li>
              Quick Links • Home • Shop • About • Contact Customer Support • FAQ
              • Shipping • Returns • Privacy Policy Follow Us Facebook •
              Instagram • X • YouTube © 2026 SHOPEASE.
            </li>
            <li>All rights reserved. Designed with ❤️ by Rayyan.</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App
