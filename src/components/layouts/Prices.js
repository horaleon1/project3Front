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
      bch: [],
      eos: []
    };
  }
  componentDidMount() {
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
      <div className="barUser">
        <div className="dataBarUser">
          <span className="live"></span>
          <span>
            <i>En vivo:</i>
          </span>
          <span>₿</span>
          <span>
            BTC/USD {this.state.btc[0]}
          </span>
          <span>
            BTC/MXN {this.state.btc[1]}
          </span>
          <span>Ξ</span>
          <span>
            ETH/USD {this.state.eth[0]}
          </span>
          <span>ETH/MXN {this.state.eth[1]}</span>
          <span>Ʀ</span>
          <span>
            XRP/USD {this.state.xrp[0]}
          </span>
          <span>XRP/MXN {this.state.xrp[1]}</span>
          <span>Ł</span>
          <span>
            LTC/USD {this.state.ltc[0]}
          </span>
          <span>LTC/MXN {this.state.ltc[1]}</span>
          <span>฿</span>
          <span>
            BCH/USD {this.state.bch[0]}
          </span>
          <span>BCH/MXN {this.state.bch[1]}</span>
        </div>
      </div>
    );
  }
}
