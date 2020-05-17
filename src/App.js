import React, { Component } from "react";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      range: "1m",
      stocksData: {}
    };
  }

  render() {
    const { symbol, range, stockData } = this.state;
    return (
      <div className="App">
        <SymbolInput value={symbol} />
        <RangeButtonGroup value={range} />
        <StockChart symbol={symbol} data={stockData} />
      </div>
    );
  }
}