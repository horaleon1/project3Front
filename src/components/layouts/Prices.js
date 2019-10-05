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
      bch: [],
      eos: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,MXN"
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
          "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,MXN"
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
          "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,MXN"
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
          "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,MXN"
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
          "https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,MXN"
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
          <span className="live"></span>
          <span>
            <i>En vivo:</i>
          </span>
          <span>₿</span>
          <span>
            BTC/USD {this.state.btc.USD}
          </span>
          <span>BTC/MXN {this.state.btc.MXN}</span>
          <span>Ξ</span>
          <span>
            ETH/USD {this.state.eth.USD}
          </span>
          <span>ETH/MXN {this.state.eth.MXN}</span>
          <span>Ʀ</span>
          <span>
            XRP/USD {this.state.xrp.USD}
          </span>
          <span>XRP/MXN {this.state.xrp.MXN}</span>
          <span>Ł</span>
          <span>
            LTC/USD {this.state.ltc.USD}
          </span>
          <span>LTC/MXN {this.state.ltc.MXN}</span>
          <span>฿</span>
          <span>
            BCH/USD {this.state.bch.USD}
          </span>
          <span>BCH/MXN {this.state.bch.MXN}</span>
        </div>
      </div>
    );
  }
}
