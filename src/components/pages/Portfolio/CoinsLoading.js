import React, { Component } from "react";
import axios from "axios";
// import Search from "./Search";
// import CoinsPortfolio from "./CoinsPortfolio";
import Sidebar2 from "./Sidebar2";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import fuzzy from "fuzzy";
import Reacthighcharts from "react-highcharts";
import Highcharts from "./Highcharts";
import HighchartsTheme from "./HighchartsTheme";
Reacthighcharts.Highcharts.setOptions(HighchartsTheme);

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
  return +(n + "").slice(0, 7);
};

export default class CoinsLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      coinListCopy: [],
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
        this.setState({ coinList, coinListCopy: coinList });
      });

    this._handlePrice("BTC");
  };

  _handlePrice = label => {
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${label}&tsyms=USD`;
    axios.get(url).then(res => {
      if (Object.keys(res.data.RAW).length > 0) {
        const prices = res.data.RAW[label].USD;
        this.setState({ prices });
        console.log(prices);
      }
    });
  };

  selectedCoin = value => {
    //this.state.coinList = this.setState({ label })
    //this.setState({label: value})
    this._handlePrice(value);
  };

  filterCoins = e => {
    let coins = this.state.coinList;
    let inputValue = e.target.value;
    // console.log(inputValue);
    let coinSymbols = Object.values(coins);


    let filtrado = coinSymbols.filter((el, i) => {
      return el.Symbol === inputValue.toUpperCase();
    });

    console.log(filtrado)


    // let coinNames = coinSymbols.map(e => coins[e].CoinName);
    // console.log(coinNames);
    // let allValuesCoins = coinNames.concat(coinSymbols);
    // let allValuesCoins = coinSymbols
    // console.log(allValuesCoins);
    // let fuzzySearch = fuzzy
    //   .filter(inputValue, coinSymbols, {})
    //   .map(e => e.string);
    // console.log(fuzzySearch);

    // this.setState({ coinListCopy: fuzzySearch });
    this.setState({ coinListCopy: filtrado });
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
                  Circulación total: <br /> {this.state.prices.SUPPLY}
                </h4>
              </div>
              {/* ////////////////// */}
            </div>
            <div></div>
          </div>

          {/* //////////////////// */}

          <div className="firstDataCoin">
            Mercado de Capitalización: <br /> ${this.state.prices.MKTCAP} USD
            <ul>
              <li>
                <h2>24 Horas</h2>
                <br />
                <h4>
                  Recomendación:
                  <br /> Vender
                </h4>
              </li>
              <li>
                {this.state.prices.HIGH24HOUR > this.state.prices.PRICE ? (
                  <i class="fas fa-arrow-up" style={{ color: "green" }}></i>
                ) : (
                  <i class="fas fa-arrow-down" style={{ color: "red" }}></i>
                )}
                Precio Máximo: <br />${this.state.prices.HIGH24HOUR} USD
              </li>
              <li>
                Último Precio: <br /> ${this.state.prices.PRICE} USD
              </li>
              <li>
                Precio Minimo: <br /> ${this.state.prices.LOW24HOUR} USD
              </li>
              Volumen total: <br />
              {this.state.prices.VOLUME24HOUR}
              {this.state.prices.FROMSYMBOL}
            </ul>
            <ul>
              <li>
                <h2>1 Hora</h2>
                <br />
                <h4>
                  Recomendación: <br />
                  Vender
                </h4>
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
              Volumen total: <br />
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
        <div className="loadingCoins">
          <ul>
            {Object.keys(this.state.coinListCopy)
              .slice(0, 400)
              .map(e => (
                <li key={e.id} onClick={() => this.selectedCoin(e)}>
                  <i class="fas fa-heart favoriteHeart"></i>
                  <img
                    src={`http://cryptocompare.com/${this.state.coinListCopy[e].ImageUrl}`}
                    className="coinsLoadingImg"
                  />

                  <h1>{this.state.coinListCopy[e].Symbol}</h1>

                  <h3>{this.state.coinListCopy[e].CoinName}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
