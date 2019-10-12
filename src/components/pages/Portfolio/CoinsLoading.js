import React, { Component } from "react";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import TradingViewWidget from "react-tradingview-widget";
import {
  TwitterTimelineEmbed
  // TwitterShareButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton
} from "react-twitter-embed";

require("dotenv");

const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_API);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const Input = styled.input`
  width: 92%;
  border-radius: 20px;
  border: 1px solid #141747;
  font-size: 1.4rem;
  height: 2rem;
`;
const LogoCoins = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  padding-top: 30px;
  letter-spacing: 2px;
  color: #141747;
  margin-left: 30px;
`;
const LogoCoins2 = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: #141747;
  margin-left: -40px;
`;
const Recomendation = styled.div`
  font-size: 1.8em;
  margin-top: 20px;
  padding-left: 30px;
`;
const Recomendation2 = styled.div`
  font-size: 1.8em;
  margin-top: 20px;
  padding-left: 60px;
`;
const LayoutInformation = styled.div`
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1); */
  /* background-color: lightgray; */
`;

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
const twitterUser = "horaleon1";

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
      alert: false,
      twitter: false,
      information: false
    };
  }

  activateG = () => {
    this.setState({ grafica: !this.state.grafica });
  };

  noInfoAlert = () => {
    this.setState({ alert: !this.state.alert });
  };
  activateInformaction = () => {
    this.setState({ information: !this.state.information });
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };

  twitterUser = () => {
    this.setState({ twitter: !this.state.twitter });
    console.log(this.state.twitter);
  };

  componentDidMount = () => {
    cc.coinList()
      .then(coinList => {
        const list = coinList.Data;
        this.setState({ coinList, coinListCopy: list });
      })
      .catch(console.error);

    this._handlePrice("");
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
          console.log(prices);
          console.log(this.state.prices.FROMSYMBOL);
        }
      })
      .catch(console.error);
  };

  selectedCoin = value => {
    this._handlePrice(value);

    window.scrollTo(0, 0);

    //console.log(value);
  };

  filterCoins = e => {
    let coins = this.state.coinList;

    let inputValue = e.target.value;

    let coinSymbols = Object.values(coins.Data);

    let filtrado = coinSymbols.filter((el, i) => {
      return el.Symbol.includes(inputValue.toUpperCase());
    });

    if (inputValue.length === 0) {
      this.setState({ coinListCopy: coins.Data });
    } else {
      this.setState({ coinListCopy: filtrado });
      //console.log(filtrado,"filtrado");
      //console.log(this.coinListCopy, "copy");
      // console.log("Ingresa el simbolo o ticker completo");
    }
  };

  render() {
    return (
      <div className="coinsLoading">
        <LayoutInformation>
          <div className="dataCrypto"></div>
          {/* //Sidebar */}

          {this.state.prices.FROMSYMBOL != null ? (
            <LayoutSidebar>
              <div className="sidenav2">
                <div className="infoSelectedCrypto">
                  <h3>Criptomoneda:</h3>

                  <div className="infoSelectedData">
                    <h4> {this.state.prices.FROMSYMBOL}</h4>
                    <img
                      src={`http://cryptocompare.com/${this.state.prices.IMAGEURL}`}
                      className="coinsLoadingImg"
                      alt="Criptomoneda"
                    />
                    <br />
                    <h4>Precio: {usdFormat(this.state.prices.PRICE)} USD</h4>
                    <h4>
                      Circulación total: <br /> <br />{" "}
                      {formatNumber(this.state.prices.SUPPLY)}
                    </h4>
                  </div>
                </div>
                {/* // Activate/deactive Button  Graph/// */}

                {this.state.information ? (
                  <div className="buttonGraph">
                    <button onClick={() => this.activateG()}>
                      {!this.state.grafica ? "Gráfica" : "Cerrar Gráfica"}
                    </button>
                  </div>
                ) : null}

                {/* // Activate/deactive Button  Information/// */}

                <div className="informationButton">
                  <button onClick={() => this.activateInformaction()}>
                    {!this.state.information
                      ? "Información"
                      : "Cerrar Información"}
                  </button>
                </div>

                {/* // Activate/deactive Button  Twitter/// */}
                <div className="twitter">
                  <button
                    onClick={() => this.twitterUser()}
                    className="twitterButton"
                  >
                    {!this.state.twitter ? "Twitter" : "Cerrar Twitter"}
                  </button>
                </div>
              </div>
            </LayoutSidebar>
          ) : null}

          {this.state.information ? (
            <div className="firstDataCoin">
              {/* //////////////////Graph ////////////////*/}
              {this.state.grafica ? (
                <div className="graph">
                  <TradingViewWidget
                    symbol={`BINANCE:${this.state.prices.FROMSYMBOL}USD`}
                  />
                </div>
              ) : null}
              {/* /////////////Twitter Timeline /////////// */}
              {this.state.twitter ? (
                <div className="timelineTwitter">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={twitterUser}
                    options={{ height: 500, width: 700 }}
                  />
                </div>
              ) : null}

              {/* //Financial Data // */}

              <div className="financialInformation">
                <LogoCoins2>Información Financiera</LogoCoins2>
                <h2>
                  <i
                    className="fas fa-poll"
                    style={{ marginRight: "10px", color: "#f91a1a" }}
                  ></i>
                  Mercado de Capitalización:{" "}
                  {usdFormat(this.state.prices.MKTCAP)} USD
                </h2>
                <ul>
                  <li>
                    <h2 id="horas">
                      <i
                        className="far fa-clock"
                        style={{ marginRight: "15px" }}
                      ></i>
                      1 Día
                    </h2>
                  </li>

                  {this.state.prices.HIGH24HOUR > this.state.prices.PRICE ? (
                    <li>
                      <Recomendation>Recomendación:</Recomendation>
                      <span className="arrow">
                        <br />
                        Comprar
                        <i
                          className="fas fa-arrow-up"
                          style={{ color: "green" }}
                        ></i>
                      </span>
                    </li>
                  ) : (
                    <li>
                      <Recomendation>Recomendación:</Recomendation>
                      <span className="arrow">
                        <br />
                        Vender
                        <i
                          className="fas fa-arrow-down"
                          style={{ color: "red" }}
                        ></i>
                      </span>
                    </li>
                  )}
                  <li>
                    <Recomendation2>Cambio:</Recomendation2>
                    <span className="arrow2">
                      <br />
                      {formatNumber(this.state.prices.CHANGEPCT24HOUR)}
                      {this.state.prices.CHANGEPCT24HOUR > 0 ? (
                        <i
                          className="fas fa-percent"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-percent"
                          style={{ color: "red" }}
                        ></i>
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
                      <Recomendation>Recomendación:</Recomendation>
                      <span className="arrow">
                        <br />
                        Comprar
                        <i
                          className="fas fa-arrow-up"
                          style={{ color: "green" }}
                        ></i>
                      </span>
                    </li>
                  ) : (
                    <li>
                      <Recomendation2>Recomendación:</Recomendation2>
                      <span className="arrow">
                        <br />
                        Vender
                        <i
                          className="fas fa-arrow-down"
                          style={{ color: "red" }}
                        ></i>
                      </span>
                    </li>
                  )}
                  <li>
                    <Recomendation2>Cambio:</Recomendation2>
                    <span className="arrow2">
                      <br />
                      {formatNumber(this.state.prices.CHANGEPCTHOUR)}
                      {this.state.prices.CHANGEPCTHOUR > 0 ? (
                        <i
                          className="fas fa-percent"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-percent"
                          style={{ color: "red" }}
                        ></i>
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
                    volumeUsd(
                      this.state.prices.VOLUMEHOUR,
                      this.state.prices.PRICE
                    )
                  )}
                </h3>
              </div>
            </div>
          ) : (
            <LogoCoins>Selecciona una Criptomoneda para comenzar.</LogoCoins>
          )}

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
            <h2 onClick={() => this.toTop()} className="arriba">
              <i className="fas fa-arrow-up"></i>
            </h2>
          </div>
        </LayoutInformation>
      </div>
    );
  }
}
