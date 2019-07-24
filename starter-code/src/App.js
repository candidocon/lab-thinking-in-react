import React, { Component } from "react";
import "./App.css";
import { data as dataJSON } from "./data.json";
import ProductsTable from "./components/ProductsTable.js";
import SearchBar from "./components/SearchBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [...dataJSON],
      visibleProducts: [...dataJSON],
      searchTerm: "",
      stockOnly: false
    };
  }

  search = e => {
    let newSearchTerm;
    let inStockOnly;
    if (e.target.type === "checkbox") {
      newSearchTerm = this.state.searchTerm;
      inStockOnly = e.target.checked;
    } else {
      newSearchTerm = e.target.value;
      inStockOnly = this.state.stockOnly;
    }
    let clone = [...this.state.allProducts];

    let filteredList = clone.filter(eachProduct => {
      if (inStockOnly) {
        return (
          eachProduct.name
            .toUpperCase()
            .includes(newSearchTerm.toUpperCase()) && eachProduct.stocked
        );
      } else {
        return eachProduct.name
          .toUpperCase()
          .includes(newSearchTerm.toUpperCase());
      }
    });

    this.setState({
      visibleProducts: filteredList,
      searchTerm: newSearchTerm,
      stockOnly: inStockOnly
    });
  };

  // searchStockOnly = e => {
  //   console.log(e.target.type);
  //   let clone = [...this.state.allProducts];
  //   let newSearchTerm = this.state.searchTerm;
  //   let newStockOnly = e.target.checked;

  //   let filteredList = clone.filter(eachProduct => {
  //     if (newStockOnly) {
  //       return (
  //         eachProduct.name
  //           .toUpperCase()
  //           .includes(newSearchTerm.toUpperCase()) && eachProduct.stocked
  //       );
  //     } else {
  //       return eachProduct.name
  //         .toUpperCase()
  //         .includes(newSearchTerm.toUpperCase());
  //     }
  //   });

  //   this.setState({
  //     visibleProducts: filteredList,
  //     searchTerm: newSearchTerm,
  //     stockOnly: newStockOnly
  //   });
  // };

  render() {
    return (
      <div className="App">
        <SearchBar searchFunct={this.search} val={this.state.searchTerm} />
        <ProductsTable allProducts={this.state.visibleProducts} />
      </div>
    );
  }
}

export default App;
