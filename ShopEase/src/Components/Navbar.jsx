
const Navbar = ({counter}) => {
  return (
    <>
      <nav className="navContainer">

        <div className="logo-container">
          <i className="logo fa-brands fa-shopify"></i>
          <h3>SHOPEASE</h3>
        </div>

        <ul className="link-container">
          <li>Home</li>
          <li>About</li>
          <li>
            Shop<i className="down fa-solid fa-sort-down"></i>
          </li>
        </ul>

        <button className="counter">
          <i className=" cart fa-solid fa-cart-plus"></i>Cart
          <span className="count">{counter}</span>
        </button>

      </nav>
    </>
  )
}

export default Navbar
