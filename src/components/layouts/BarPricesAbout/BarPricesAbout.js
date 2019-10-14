import React, { Component } from "react";
import './barPricesAbout.css';
require('dotenv');

const cc = require("cryptocompare");
cc.setApiKey(
  process.env.REACT_API
);
const usdFormat = n => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(n);
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btc: [],
      eth: [],
      xrp: [],
      ltc: [],
      bch: []
    };
  }
  componentDidMount(){
  setInterval(() => {
    cc.price("BTC", ["USD", "MXN"])
      .then(prices => {
        const btc = Object.values(prices);
        this.setState({ btc });
      })
      .catch(console.error);
  }, 3000);

   setInterval(() => {
  cc.price("ETH", ["USD", "MXN"])
    .then(prices => {
      const eth = Object.values(prices);
      this.setState({ eth });
    })
    .catch(console.error);
  }, 3000);

  setInterval(() => {
  cc.price("XRP", ["USD", "MXN"])
    .then(prices => {
      const xrp = Object.values(prices);
      this.setState({ xrp });
    })
    .catch(console.error);
   }, 3000);

  setInterval(() => {
  cc.price("LTC", ["USD", "MXN"])
  .then(prices => {
  const ltc = Object.values(prices);
  this.setState({ ltc });
})
  .catch(console.error);
   }, 3000);

   setInterval(() => {
  cc.price("BCH", ["USD", "MXN"])
  .then(prices => {
  const bch = Object.values(prices);
  this.setState({ bch });
})
  .catch(console.error);
   }, 3000);
  }
  render() {
    return (
      <div className="barUserB">
        <div className="dataBarUserB">
          <ul>
            <li>
              ₿ BTC/USD {this.state.btc[0]} <br />
              <br />₿ BTC/MXN {usdFormat(this.state.btc[1])}
            </li>
            <li>
              Ξ ETH/USD {usdFormat(this.state.eth[0])}
              <br />
              <br />Ξ ETH/MXN {usdFormat(this.state.eth[1])}
            </li>
            <li>
              Ʀ XRP/USD {usdFormat(this.state.xrp[0])}
              <br />
              <br />Ʀ XRP/MXN {usdFormat(this.state.xrp[1])}
            </li>
            <li>
              Ł LTC/USD {usdFormat(this.state.ltc[0])} <br />
              <br />Ł LTC/MXN {usdFormat(this.state.ltc[1])}
            </li>
            <li>
              ฿ BCH/USD {usdFormat(this.state.bch[0])} <br />
              <br />฿ BCH/MXN {usdFormat(this.state.bch[1])}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
