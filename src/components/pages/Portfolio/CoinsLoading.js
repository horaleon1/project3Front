import React, { Component } from "react";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import TradingViewWidget from "react-tradingview-widget";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./portfolio.css";

require("dotenv");

const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_API);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  @media (max-width: 990px) {
    display: grid;
  }
`;
const Input = styled.input`
  width: 90%;
  border-radius: 20px;
  border: 1px solid #141747;
  font-size: 1.8rem;
  height: 2rem;

  @media (max-width: 990px) {
    width: 70%;
    border-radius: 20px;
    border: 1px solid #141747;
    font-size: 0.8rem;
    height: 1rem;
    text-align: center;
    margin-left: 15%;
  }
`;
const LogoCoins = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  padding-top: 50px;
  letter-spacing: 2px;
  color: #141747;
  text-align: center;
  @media (max-width: 990px) {
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-top: 50px;
    letter-spacing: 2px;
    color: #141747;
    text-align: center;
  }
`;
const LogoCoins2 = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: #141747;
  @media (max-width: 990px) {
    font-size: 1.8em;
    margin-bottom: 20px;
    letter-spacing: 2px;
    color: #141747;
  }
`;
const Recomendation = styled.div`
  font-size: 1.8em;
  margin-top: 20px;
  padding-left: 30px;
`;
const Recomendation2 = styled.div`
  font-size: 1.8em;
  margin-top: 20px;
  padding-left: 30px;
`;
const Loader = () => (
  <h1 className="loader">
    <i className="fas fa-spinner fa-spin"></i>
  </h1>
);

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

const ShowAlert = () => (
  <div className="showAlert">
    <h3>
      La información no esta disponible en este momento, selecciona otra
      criptomoneda o intenta mas tarde.
    </h3>
  </div>
);

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
      information: false,
      loading: false,
      twitterUser: "bitso",
      errorAlert: true,
      count: 3,
      coin: false,
      mapFilterCoins: "",
      errorNotice: false
    };
  }
  activateErrorNotice = () => {
    this.setState({ errorNotice: !this.state.errorNotice })
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
  };

  hideLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  showLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  errorAlert = () => {
    this.setState({ errorAlert: !this.state.errorAlert });

    let countInt = 3;
    let interval = setInterval(() => {
      if (countInt > 0) countInt--;

      if (countInt <= 0) {
        clearInterval(interval);
        this.setState({ errorAlert: !this.state.errorAlert });
        countInt = 3;
      }
    }, 600);

    return;
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.showLoader();
    cc.coinList()
      .then(coinList => {
        const list = coinList.Data;
        this.setState({ coinList, coinListCopy: list });
        this.hideLoader();
      })
      .catch(console.error);
    this.hideLoader();
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
        // if (Object.keys(priceFull[label]).length > 0) {
        // if (Object.keys(priceFull[label]).length !== 0) {
        if (typeof Object.keys(this.state.prices) !== "undefined") {
          const prices = priceFull[label].USD;
          this.setState({ prices });
        }
      })
      .catch(error => {
        Promise.reject();
        console.log(error);
        this.errorAlert();
        // this.activateErrorNotice();
        return;
      });
  };

  selectedCoin = value => {
    if(this.state.errorNotice){
    this._handlePrice(this.state.mapFilterCoins[value]);         
    }else{
    this._handlePrice(value);              
    }
    // console.log(this.state.mapFilterCoins);

    console.log(value, "value");
  
    window.scrollTo(0, 0);

    // this.setState({ mapFilterCoins: 0 });
  };

  filterCoins = e => {
    let coins = this.state.coinList;
    let inputValue = e.target.value;
    let coinSymbols = Object.values(coins.Data);
    let coinSymbols2 = Object.keys(coins.Data);

    // filtrado handle the filter coin to display all coins all the time on screen
    let filtrado = coinSymbols.filter((el, i) => {
      return el.Symbol.includes(inputValue.toUpperCase());
    });
    // Filtrado 2 handle the filter coin after click and display information
    let filtrado2 = coinSymbols2.filter((el, i) => {
      return el.includes(inputValue.toUpperCase());
    });

    if (inputValue.length === 0) {
      this.setState({ coinListCopy: coins.Data });
    } else {
      this.setState({ errorNotice: !this.state.errorNotice })

      this.setState({ coinListCopy: filtrado }); 
      
      this.setState({ mapFilterCoins: filtrado2 })
    }
    this.setState({ errorNotice: !this.state.errorNotice })
  };

  render() {
    return (
      <div className="coinsLoading">
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

              <div className="buttonGraph">
                <button onClick={() => this.activateG()}>
                  {!this.state.grafica ? "Gráfica" : "Cerrar Gráfica"}
                </button>
              </div>

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

        {/* /////////////Twitter Timeline /////////// */}
        {this.state.twitter ? (
          <div className="timelineTwitter">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={this.state.twitterUser}
              options={{ height: 500, width: 700 }}
            />
          </div>
        ) : null}

        {/* //////////////////Graph ////////////////*/}
        {this.state.grafica ? (
          <div className="graph">
            <h4 style={{color:"red", textAlign:"center", paddingBottom:"10px"}}>Las únicas gráficas disponibles son de activos en BINANCE en pares de BTC </h4>
            <TradingViewWidget
              symbol={`BINANCE:${this.state.prices.FROMSYMBOL}BTC`}
            />
          </div>
        ) : null}

        {this.state.information ? (
          <div className="firstDataCoin">
            {/* //Financial Data // */}
            <div className="financialInformation">
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
          <LogoCoins>
            {typeof Object.keys(this.state.prices) !== "undefined" &&
            Object.keys(this.state.prices).length > 0
              ? "Encuentra mas de 5,000 criptomonedas."
              : "Selecciona una Criptomoneda para comenzar."}
          </LogoCoins>
        )}
        <div className="containerSearch">
          {/* //Search Input// */}
          <h4>Buscar</h4>
          <div className="searchContainer">
            <Grid>
              <h3>Buscar</h3>
              <Input onKeyUp={this.filterCoins} />
            </Grid>
          </div>

          {!this.state.errorAlert ? <ShowAlert /> : null}

          {/* //Grid loaded  5000 Coins // */}
          {!this.state.loading ? (
            <div className="loadingCoins">
              <ul>
                {Object.keys(this.state.coinListCopy)
                  .slice(0, 100)
                  .map((object, i) => (
                    <li key={i} onClick={() => this.selectedCoin(object)}>
                      {/* <i class="fas fa-heart favoriteHeart"></i> */}
                      <img
                        src={`http://cryptocompare.com/${this.state.coinListCopy[object].ImageUrl}`}
                        className="coinsLoadingImg"
                        alt="Criptomoneda"
                      />
                      <h1>{this.state.coinListCopy[object].Symbol}</h1>
                      <h3>{this.state.coinListCopy[object].CoinName}</h3>
                    </li>
                  ))}
              </ul>
              <div className="arriba">
                <h2 onClick={() => this.toTop()}>
                  <i className="fas fa-arrow-up"></i>
                </h2>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
