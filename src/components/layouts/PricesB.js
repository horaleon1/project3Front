import React, { Component } from "react";
import axios from "axios";

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
  componentDidMount() {
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const btc = res.data;
          //console.log(btc);
          this.setState({ btc: btc });
        });
    }, 5000);
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const eth = res.data;
          //console.log(eth);
          this.setState({ eth: eth });
        });
    }, 5000);
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const xrp = res.data;
          //console.log(xrp);
          this.setState({ xrp: xrp });
        });
    }, 5000);
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const ltc = res.data;
          //console.log(ltc);
          this.setState({ ltc: ltc });
        });
    }, 5000);
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const bch = res.data;
          //console.log(bch);
          this.setState({ bch });
        });
    }, 5000);
  }
  render() {
    return (
      <div className="barUserB">
        <div className="dataBarUserB">
          <ul>
            <li>
              ₿ BTC/USD {this.state.btc.USD} <br />
              <br />₿ BTC/MXN {this.state.btc.MXN}
            </li>
            <li>
              Ξ ETH/USD {this.state.eth.USD}
              <br />
              <br />Ξ ETH/MXN {this.state.eth.MXN}
            </li>
            <li>
              Ʀ XRP/USD {this.state.xrp.USD}
              <br />
              <br />Ʀ XRP/MXN {this.state.xrp.MXN}
            </li>
            <li>
              Ł LTC/USD {this.state.ltc.USD} <br />
              <br />Ł LTC/MXN {this.state.ltc.MXN}
            </li>
            <li>
              ฿ BCH/USD {this.state.bch.USD} <br />
              <br />฿ BCH/MXN {this.state.bch.MXN}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
