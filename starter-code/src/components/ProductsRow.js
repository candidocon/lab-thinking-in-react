import React from "react";

function ProductsRow(props) {
  return (
    <div>
      {props.addCat && <div className="row">{props.category}</div>}

      <div className={`row ${props.stocked ? "" : "red"}`}>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ProductsRow;
