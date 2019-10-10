import React, { Component } from "react";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import TradingViewWidget from "react-tradingview-widget";

require("dotenv");

const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_API);

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
const LogoCoins = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  margin-top: 30px;
  letter-spacing: 2px;
  color: #141747;
  margin-left: 25px;
`;
const LogoCoins2 = styled.div`
  font-size: 2.5em;
  margin-bottom: 30px;
  letter-spacing: 2px;
  color: #141747;
  margin-left: -40px;
`;
const App = () => <TradingViewWidget symbol="BITSTAMP:BTCUSD" />;

const formatNumber = n => {
  return new Intl.NumberFormat().format(n);
};

const usdFormat = n => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(n);
};
const volumeUsd = (volume, price) => {
  return volume * price;
};

export default class CoinsLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      coinListCopy: [],
      saveCoin: [],
      filterCoins: this.filterCoins,
      prices: [],
      grafica: false,
      alert: false
    };
  }
  activateG = () => {
    this.setState({ grafica: !this.state.grafica });
  };

  noInfoAlert = () => {
    this.setState({ alert: !this.state.alert });
    console.log("noInfoAlert");
  };

  componentDidMount = () => {
    // axios
    //   .get("https://min-api.cryptocompare.com/data/all/coinlist")
    //   .then(res => {
    //     const coinList = res.data.Data;
    //     this.setState({ coinList, coinListCopy: coinList });
    //   });
    cc.coinList()
      .then(coinList => {
        const list = coinList.Data;
        this.setState({ coinList, coinListCopy: list });
      })
      .catch(console.error);

    this._handlePrice("BTC");
  };

  _handlePrice = label => {
    // let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${label}&tsyms=USD`;
    // axios.get(url).then(res => {
    //   if (res.data.Response != null) {
    //     console.log("No se puede mostrar la información en este momento");
    //       return;
    //   }
    //   if (Object.keys(res.data.RAW).length > 0) {
    //     const prices = res.data.RAW[label].USD;
    //     this.setState({ prices });
    //   }
    // });

    //new implementation

    cc.priceFull(`${label}`, "USD")
      .then(priceFull => {
        if (Object.keys(priceFull[label]).length >= 0) {
          const prices = priceFull[label].USD;
          this.setState({ prices });
        }
      })
      .catch(console.error);
  };

  selectedCoin = value => {
    this._handlePrice(value);
  };

  filterCoins = e => {
    let coins = this.state.coinList;

    let inputValue = e.target.value;

    let coinSymbols = Object.values(coins);

    let filtrado = coinSymbols.filter((el, i) => {
      return el.Symbol.includes(inputValue.toUpperCase());
    });

    if (inputValue.length === 0) {
      this.setState({ coinListCopy: coins });
    } else {
      this.setState({ coinListCopy: filtrado });
      console.log("Ingresa el simbolo o ticker completo");
    }
  };

  render() {
    return (
      <div className="coinsLoading">
        <div className="dataCrypto"></div>
        <LayoutSidebar>
          <div className="sidenav2">
            <div className="sidenav2">
              <a href="#">Arriba</a>
            </div>
            {alert ? (
              <div className="infoSelectedCrypto">
                <h3>Criptomoneda Seleccionada:</h3>

                <div className="infoSelectedData">
                  <h4> {this.state.prices.FROMSYMBOL}</h4>
                  <img
                    src={`http://cryptocompare.com/${this.state.prices.IMAGEURL}`}
                    className="coinsLoadingImg"
                    alt="Criptomoneda"
                  />{" "}
                  <br />
                  <h4>Precio: {usdFormat(this.state.prices.PRICE)} USD</h4>
                  <h4>
                    Circulación total: <br /> <br />{" "}
                    {formatNumber(this.state.prices.SUPPLY)}
                  </h4>
                </div>
              </div>
            ) : (
              <div>
                <h3>
                  No hay información <br /> disponible en este momento.
                </h3>
              </div>
            )}
          </div>

          <div className="firstDataCoin">
            {/* //////////////////////////////Grafica */}
            {this.state.grafica ? <div className="graph">{App()}</div> : null}

            <div className="buttonGraph">
              <button onClick={() => this.activateG()}>
                {!this.state.grafica ? "Gráfica" : "Cerrar Gráfica"}
              </button>
            </div>

            <LogoCoins2>Información Financiera</LogoCoins2>
            <h2>
              <i
                className="fas fa-poll"
                style={{ marginRight: "10px", color: "#f91a1a" }}
              ></i>
              Mercado de Capitalización: {usdFormat(this.state.prices.MKTCAP)}{" "}
              USD
            </h2>
            <ul>
              <li>
                <h2 id="horas">
                  <i
                    className="far fa-clock"
                    style={{ marginRight: "15px" }}
                  ></i>
                  24 Horas
                </h2>
              </li>

              {this.state.prices.HIGH24HOUR > this.state.prices.PRICE ? (
                <li>
                  <span className="arrow">
                    Recomendación: <br />
                    Comprar
                    <i
                      className="fas fa-arrow-up"
                      style={{ color: "green" }}
                    ></i>
                  </span>
                </li>
              ) : (
                <li>
                  <span className="arrow">
                    Recomendación: <br />
                    Vender
                    <i
                      className="fas fa-arrow-down"
                      style={{ color: "red" }}
                    ></i>
                  </span>
                </li>
              )}
              <li>
                <span className="arrow">
                  Cambio: <br />
                  {formatNumber(this.state.prices.CHANGEPCT24HOUR)}
                  {this.state.prices.CHANGEPCT24HOUR > 0 ? (
                    <i
                      className="fas fa-percent"
                      style={{ color: "green" }}
                    ></i>
                  ) : (
                    <i className="fas fa-percent" style={{ color: "red" }}></i>
                  )}
                </span>
              </li>
            </ul>
            <div className="prices">
              <ul>
                <li>Precio Máximo: ${this.state.prices.HIGH24HOUR} USD</li>
                <li>Último Precio: ${this.state.prices.PRICE} USD</li>
                <li>Precio Minimo: ${this.state.prices.LOW24HOUR} USD</li>
              </ul>
            </div>
            <h3>
              <i
                className="fas fa-coins"
                style={{ marginRight: "10px", color: "#f91a1a" }}
              ></i>
              Volumen total:
              {formatNumber(this.state.prices.VOLUME24HOUR)}
              {this.state.prices.FROMSYMBOL}
              <i
                className="fas fa-dollar-sign"
                style={{
                  marginRight: "10px",
                  color: "#f91a1a",
                  marginLeft: "10px"
                }}
              ></i>
              Volumen total:{" "}
              {usdFormat(
                volumeUsd(
                  this.state.prices.VOLUME24HOUR,
                  this.state.prices.PRICE
                )
              )}
            </h3>
            <ul>
              <li>
                <h2 id="horas">
                  <i
                    className="far fa-clock"
                    style={{ marginRight: "10px" }}
                  ></i>
                  1 Hora
                </h2>
              </li>
              {this.state.prices.HIGHHOUR > this.state.prices.PRICE ? (
                <li>
                  <span className="arrow">
                    Recomendación: <br />
                    Comprar
                    <i
                      className="fas fa-arrow-up"
                      style={{ color: "green" }}
                    ></i>
                  </span>
                </li>
              ) : (
                <li>
                  <span className="arrow">
                    Recomendación: <br />
                    Vender
                    <i
                      className="fas fa-arrow-down"
                      style={{ color: "red" }}
                    ></i>
                  </span>
                </li>
              )}
              <li>
                <span className="arrow">
                  Cambio: <br />
                  {formatNumber(this.state.prices.CHANGEPCTHOUR)}
                  {this.state.prices.CHANGEPCTHOUR > 0 ? (
                    <i
                      className="fas fa-percent"
                      style={{ color: "green" }}
                    ></i>
                  ) : (
                    <i className="fas fa-percent" style={{ color: "red" }}></i>
                  )}
                </span>
              </li>
            </ul>
            <div className="prices">
              <ul>
                <li>Precio Máximo: ${this.state.prices.HIGHHOUR} USD</li>
                <li>Último Precio: ${this.state.prices.PRICE} USD</li>
                <li>Precio Minimo: ${this.state.prices.LOWHOUR} USD</li>
              </ul>
            </div>
            <h3>
              <i
                className="fas fa-coins"
                style={{ marginRight: "10px", color: "#f91a1a" }}
              ></i>
              Volumen total:{formatNumber(this.state.prices.VOLUMEHOUR)}
              {this.state.prices.FROMSYMBOL}
              <i
                className="fas fa-dollar-sign"
                style={{
                  marginRight: "10px",
                  color: "#f91a1a",
                  marginLeft: "10px"
                }}
              ></i>
              Volumen total:{" "}
              {usdFormat(
                volumeUsd(this.state.prices.VOLUMEHOUR, this.state.prices.PRICE)
              )}
            </h3>
          </div>
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
              .slice(0, 50)
              .map(e => (
                <li key={e.id} onClick={() => this.selectedCoin(e)}>
                  {/* <i class="fas fa-heart favoriteHeart"></i> */}
                  <img
                    src={`http://cryptocompare.com/${this.state.coinListCopy[e].ImageUrl}`}
                    className="coinsLoadingImg"
                    alt="Criptomoneda"
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
