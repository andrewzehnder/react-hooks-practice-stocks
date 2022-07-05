import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddToPortfoloio }) {

  console.log("stockContainer", stocks)

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock 
        key={ stock.id }
        stock= { stock }
        onStockClick= { handleAddToPortfoloio }
        />
      ))
      }
    </div>
  );
}

export default StockContainer;
