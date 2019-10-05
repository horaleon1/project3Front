import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export default class CoinsPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      eliminateCoin: this.eliminateCoin
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(res => {
        const coinList = res.data.Data;
        //console.log(coinList);
        this.setState({ coinList });
      });
  };

  render() {
    function eliminateCoin(key) {
      let favorites = [...this.state.coinList];
      //console.log(favorites);
      this.setState({ favorites: _.pull(favorites, key) });
    }

    const justFavorites = 
      {
       key: Object.keys(this.state.coinList)
       .slice(101, 109)
       .map(e => e),
      //  CoinName: Object.keys(this.state.coinList)
      //  .slice(101, 109)
      //  .map(e => this.state.coinList[e].CoinName),
      //  ImageUrl:Object.keys(this.state.coinList)
      //  .slice(101, 109)
      //  .map(e => this.state.coinList[e].ImageUrl), 
    }
    ;
    //console.log(justFavorites);

    return (
      <div className="coinsLoading2Portfolio">
        <div className="loadingCoinsText">
          <ul>
            
             {/* {Object.keys(justFavorites).map(e => (
              <li key={e.id}>
                  <h1>{e}</h1> 
                  <img
                    src={`http://cryptocompare.com/${[e.ImageUrl]}`}
                    className="coinsLoadingImg"
                  />

                  <h3>{[e.CoinName]}</h3>

                  <div className="eliminateCoin" onClick={eliminateCoin}>Eliminar</div>                 
              </li>
             ))} */}
            
            
            {Object.keys(this.state.coinList)
              .slice(101, 105)
              .map(e => (
                <li key={e.id}>
                  <h1>{e}</h1>
                  <img
                    src={`http://cryptocompare.com/${this.state.coinList[e].ImageUrl}`}
                    className="coinsLoadingImg"
                  />

                  <h3>{this.state.coinList[e].CoinName}</h3>

                  <div className="eliminateCoin" onClick={eliminateCoin}>Eliminar</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
