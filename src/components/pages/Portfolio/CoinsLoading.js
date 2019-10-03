import React, { Component } from "react";
import axios from "axios";
// import Search from "./Search";
// import CoinsPortfolio from "./CoinsPortfolio";
import Sidebar2 from "./Sidebar2";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import fuzzy from "fuzzy";
import ReactHighcharts from "react-highcharts";
import Highcharts from "./Highcharts";
import HighchartsTheme from "./HighchartsTheme";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const Input = styled.input`
  width: 80%;
  border-radius: 20px;
  border: 1px solid #141747;
  font-size: 1.4rem;
  height: 2rem;
`;
const LogoInv = styled.div`
  font-size: 3.5em;
  margin-left: 220px;
  margin-bottom: 30px;
  letter-spacing: 3px;
  color: #141747;
  margin-top: 70px;
`;
const LogoCoins = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  margin-top: 10px;
  letter-spacing: 2px;
  color: #141747;
`;

const numberFormat = n => {
  return + (n + '').slice(0,7)
}

export default class CoinsLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      saveCoin: [],
      filterCoins: this.filterCoins,
      prices: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(res => {
        const coinList = res.data.Data;
        // console.log(coinList);
        this.setState({ coinList });
      });
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
      )
      .then(res => {
        const prices = res.data.RAW.ETH.USD;
        console.log(prices);
        this.setState({ prices });
      });
  };

  filterCoins = e => {
    let coins = this.state.coinList;
    let inputValue = e.target.value;
    // console.log(inputValue);
    let coinSymbols = Object.keys(coins);
    // console.log(coinSymbols);
    let coinNames = coinSymbols.map(e => coins[e].CoinName);
    // console.log(coinNames);
    let allValuesCoins = coinSymbols.concat(coinNames);
    // console.log(allValuesCoins);
    let fuzzySearch = fuzzy
      .filter(inputValue, allValuesCoins, {})
      .map(e => e.string);
    //console.log(fuzzySearch);
  };

  

  render() {
    return (
      <div className="coinsLoading">
        <div className="dataCrypto"></div>
        <LayoutSidebar>
          <div className="sidenav2">
            <div className="sidenav2">
              <a href="#">Inicio</a>
            </div>
            <div className="infoSelectedCrypto">
              <h3>Criptomoneda Selecionada</h3>
              {/* ///////////////// */}
              <div className="infoSelectedData">
                <h4>Ticker: {this.state.prices.FROMSYMBOL}</h4>
                <img
                  src={`http://cryptocompare.com/${this.state.prices.IMAGEURL}`}
                  className="coinsLoadingImg"
                />
                <h4>Precio: {numberFormat(this.state.prices.PRICE)} USD</h4>
                <h4>
                  Circulacióntotal: <br /> {this.state.prices.SUPPLY}
                </h4>
              </div>
              {/* ////////////////// */}
            </div>
          </div>

          {/* //////////////////// */}
          <div className="firstDataCoin">
            Mercado de Capitalización: <br /> ${this.state.prices.MKTCAP} USD
            <ul>
              <li>
                <h2>24 Horas</h2><br/>
                <h4>Recomendación:<br/> Vender</h4>
              </li>
              <li>
                Precio Máximo: <br />${this.state.prices.HIGH24HOUR} USD
              </li>
              <li>
                Último Precio: <br /> ${this.state.prices.PRICE} USD
              </li>
              <li>
                Precio Minimo: <br /> ${this.state.prices.LOW24HOUR} USD
              </li>
              Volumen total: <br/>
              {this.state.prices.VOLUME24HOUR}
              {this.state.prices.FROMSYMBOL}
            </ul>
            <ul>
              <li>
                <h2>1 Hora</h2><br/>
                <h4>Recomendación: <br/>
                  Vender</h4>
              </li>
              <li>
                Precio Máximo: <br /> ${this.state.prices.HIGHHOUR} USD
              </li>
              <li>
                Último Precio: <br /> ${this.state.prices.PRICE} USD
              </li>
              <li>
                Precio Minimo: <br /> ${this.state.prices.LOWHOUR} USD
              </li>
              Volumen total: <br/>
              {this.state.prices.VOLUMEHOUR}
              {this.state.prices.FROMSYMBOL} 
            </ul>
          </div>
          {/* ////////////////// */}
        </LayoutSidebar>
        <LogoCoins>Encuentra mas de 5,000 criptomonedas.</LogoCoins>
        <div className="searchContainer">
          <Grid>
            <h3>Buscar</h3>
            <Input onKeyUp={this.filterCoins} />
          </Grid>
        </div>
        <div className="loadingCoinsText">
          <ul>
            {Object.keys(this.state.coinList)
              .slice(0, 100)
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
