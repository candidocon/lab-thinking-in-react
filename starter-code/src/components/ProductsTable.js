import React from "react";
import ProductsRow from "./ProductsRow.js";

function ProductsTable(props) {
  let categoriesArr = [];
  let addCat = false;
  return (
    <div className="table">
      <div className="table-header row">
        <p>Name</p>
        <p>Price</p>
      </div>

      {props.allProducts.map(product => {
        if (categoriesArr.indexOf(product.category) === -1) {
          addCat = true;
          categoriesArr.push(product.category);
        } else {
          addCat = false;
        }
        return <ProductsRow addCat={addCat} {...product} />;
      })}
    </div>
  );
}

export default ProductsTable;
