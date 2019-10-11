import React, { Component } from "react";
require('dotenv');

const cc = require("cryptocompare");
cc.setApiKey(
  process.env.REACT_API
);

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
              <br />₿ BTC/MXN {this.state.btc[1]}
            </li>
            <li>
              Ξ ETH/USD {this.state.eth[0]}
              <br />
              <br />Ξ ETH/MXN {this.state.eth[1]}
            </li>
            <li>
              Ʀ XRP/USD {this.state.xrp[0]}
              <br />
              <br />Ʀ XRP/MXN {this.state.xrp[1]}
            </li>
            <li>
              Ł LTC/USD {this.state.ltc[0]} <br />
              <br />Ł LTC/MXN {this.state.ltc[1]}
            </li>
            <li>
              ฿ BCH/USD {this.state.bch[0]} <br />
              <br />฿ BCH/MXN {this.state.bch[1]}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
