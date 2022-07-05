import React from "react";

function Stock({ stock, onStockClick }) {
const { id, ticker, name, price } = stock
console.log("stock", stock)

function handleClick() {
  onStockClick(id)
}

  return (
    <div>
      <div className="card" onClick= {handleClick} id={ id }>
        <div className="card-body">
          <h5 className="card-title">{ name}</h5>
          <p className="card-text">{ ticker }: { price }</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
