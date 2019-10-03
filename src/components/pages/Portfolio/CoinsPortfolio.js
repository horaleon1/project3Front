import React, { Component } from 'react';
import axios from 'axios';

export default class CoinsPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(res => {
        const coinList = res.data.Data;
        console.log(coinList);
        this.setState({ coinList });
      });
  };
  
  render() {
    return (
      <div className="coinsLoading">
        <div className="loadingCoinsText">
          <ul>
            {Object.keys(this.state.coinList)
              .slice(101, 109)
              .map(e => (
                <li key={e.id}>
                  <h1>{e}</h1>
                  <img
                    src={`http://cryptocompare.com/${this.state.coinList[e].ImageUrl}`}
                    className="coinsLoadingImg"
                  />
                  <h3>{this.state.coinList[e].CoinName}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
