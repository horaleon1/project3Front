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
          this.setState({ btc });
        });
    }, 1000);

    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const eth = res.data;
          //console.log(eth);
          this.setState({ eth });
        });
    }, 1000);

    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const xrp = res.data;
          //console.log(xrp);
          this.setState({ xrp });
        });
    }, 1000);

    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,MXN"
        )
        .then(res => {
          const ltc = res.data;
          //console.log(ltc);
          this.setState({ ltc });
        });
    }, 1000);

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
    }, 1000);
  }
  render() {
    return (
      <div className="barUser">
        <div className="dataBarUser">
          {/* <span className="live"></span> */}
          <span><i>Live:</i></span>

          <span>
            ₿ BTC/USD {this.state.btc.USD} | BTC/EUR {this.state.btc.EUR} | BTC/MXN {this.state.btc.MXN}
          </span>
          <span>
            Ξ ETH/USD {this.state.eth.USD} | ETH/EUR {this.state.eth.EUR} | ETH/MXN {this.state.eth.MXN}
          </span>
          <span>
            Ʀ XRP/USD {this.state.xrp.USD} | XRP/EUR {this.state.xrp.EUR} | XRP/MXN {this.state.xrp.MXN}
          </span>
          <span>
            Ł LTC/USD {this.state.ltc.USD} | LTC/EUR {this.state.ltc.EUR} | LTC/MXN {this.state.ltc.MXN}
          </span>
          <span>
            ฿ BCH/USD {this.state.bch.USD} | BCH/EUR {this.state.bch.EUR} | BCH/MXN {this.state.bch.MXN}
          </span>
        </div>
      </div>
    );
  }
}
