import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const [stocks, setStocks] = useState([])
const [filter, setFilter] = useState("")
const [portfolio, setPortfolio] = useState([])
const [sort, setSort] = useState("Alphabetically")

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then ((r) => r.json())
  .then ((stock) => setStocks(stock))
}, [])

let sortedList = stocks.sort((a,b) => {
  if (sort === "Alphabetically") {
    return a.name.localeCompare(b.name)
  }
  else {
    return a.price - b.price
  }
})

let stockList = sortedList.filter((stock) => {
  if(filter === "") {
    return true;
  }
  else{
      return stock.type.includes(filter)
  }
})

// let newList = stockList.filter((stock) => {
//   if (sort === "") {
//     return true
//   }
//   else if (sort === "Alphabetically") {
//     let list = (stockList.sort((a,b) => a.name.localeCompare(b.name)))
//     console.log("this is the list from within the sort", list)
//     return list;
//   }
// })

// console.log("new list", newList)

function handleSort(event) {
  setSort(event.target.value)

//setStocks([...stocks].sort(a,b) => {
//   if (event.target.value === "Alphabetically") {
//     return a.name.localeCompare(b.name)
//   }
//   else {
//     return a.price - b.price
//   }
// } )
}

function handleFilter(event) {
  setFilter(event.target.value)
 }

function handleAddToPortfoloio(id) {
  stocks.filter((stock) => {
    if(id === stock.id) {
      setPortfolio([...portfolio, stock])
    }
  })
}

function handleRemoveFromPortfolio(id) {
  const updatedStocks = portfolio.filter((stock) => stock.id !== id);
  // console.log(updatedStocks)
    setPortfolio(updatedStocks)
}

  return (
    <div>
      <SearchBar filter={ filter } handleFilter={ handleFilter } sort={ sort } handleSort={ handleSort }/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={ stockList } handleAddToPortfoloio={ handleAddToPortfoloio }/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio= { portfolio } handleRemoveFromPortfolio={ handleRemoveFromPortfolio }/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
