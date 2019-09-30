import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      cryptos2: [],
      cryptos3: [],
      cryptos4: [],
      cryptos5: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,MXN"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,MXN"
      )
      .then(res => {
        const cryptos2 = res.data;
        console.log(cryptos2);
        this.setState({ cryptos2: cryptos2 });
      });
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,MXN"
      )
      .then(res => {
        const cryptos3 = res.data;
        console.log(cryptos3);
        this.setState({ cryptos3: cryptos3 });
      });
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,MXN"
      )
      .then(res => {
        const cryptos4 = res.data;
        console.log(cryptos4);
        this.setState({ cryptos4: cryptos4 });
      });
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,EUR,MXN"
      )
      .then(res => {
        const cryptos5 = res.data;
        console.log(cryptos5);
        this.setState({ cryptos5 });
      });
  }
  render() {
    return (
      <div className="barUserB">
        <div className="dataBarUserB">
          <ul>
            <li>
              ₿ BTC/USD {this.state.cryptos.USD} <br /><br/>
              ₿ BTC/MXN {this.state.cryptos.MXN}
            </li>
            <li>
              Ξ ETH/USD {this.state.cryptos2.USD}<br /><br/>
              Ξ ETH/MXN {this.state.cryptos2.MXN}
            </li>
            <li>
              Ʀ XRP/USD {this.state.cryptos3.USD}<br /><br/>
              Ʀ XRP/MXN {this.state.cryptos3.MXN}
            </li>
            <li>
              Ł LTC/USD {this.state.cryptos4.USD} <br/><br/>
              Ł LTC/MXN {this.state.cryptos4.MXN}
            </li>
            <li>
              ฿ BCH/USD {this.state.cryptos5.USD} <br/><br/>
              ฿ BCH/MXN {this.state.cryptos5.MXN}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
