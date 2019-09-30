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
      // <div className="barUser">
      //     {Object.keys(this.state.cryptos).map((key) => (
      //       <div style={{ color:"white" }} className="dataBarUser">
      //         <span>
      //           {key}
      //         </span>
      //         <span>
      //           {this.state.cryptos[key].USD}
      //         </span>
      //       </div>

      <div className="barUser">
        <div className="dataBarUser">
          <span>₿ BTC/USD {this.state.cryptos.USD} | BTC/MXN {this.state.cryptos.MXN}</span>
          <span> Ξ ETH/USD {this.state.cryptos2.USD} | ETH/MXN {this.state.cryptos2.MXN}</span>
          <span> Ʀ XRP/USD {this.state.cryptos3.USD} | XRP/MXN {this.state.cryptos3.MXN}</span>
          <span> Ł LTC/USD {this.state.cryptos4.USD} | LTC/MXN   {this.state.cryptos4.MXN}  </span>  
          <span> ฿ BCH/USD {this.state.cryptos5.USD} | BCH/MXN {this.state.cryptos5.MXN}</span>
        </div>
      </div>

      //       ))}
      //       </div>
      // )
    );
  }
}
