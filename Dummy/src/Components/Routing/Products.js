import React from "react";
import "./Product.css";
import { Link, Outlet } from "react-router-dom";

function Products(props) {
  return (
    <div className="productsContainer">
      <div className="productCategories">
        <Link style={{ color: "white" }} to="electronic">
          Electronic
        </Link>
        <Link style={{ color: "white" }} to="jewelery">
          Jewelery
        </Link>
        <Link style={{ color: "white" }} to="">
          Men'sClothing
        </Link>
        <Link style={{ color: "white" }} to="">
          Women'sClothing
        </Link>
      </div>
      <div className="categoryComponent">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
