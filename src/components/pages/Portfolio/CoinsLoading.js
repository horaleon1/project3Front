import React, { Component } from "react";
import axios from "axios";
// import Search from "./Search";
// import CoinsPortfolio from "./CoinsPortfolio";
import Sidebar2 from "./Sidebar2";
import LayoutSidebar from "./LayoutSidebar";
import styled from "styled-components";
import fuzzy from "fuzzy";

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
  letter-spacing: 3px;
  color: #141747;
`;

export default class CoinsLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      saveCoin: [],
      filterCoins: this.filterCoins
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
  };

  //  function filterCoins = (filteredCoins) => this.setState({filteredCoins});

  filterCoins = (e, List) => {
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
        <LayoutSidebar>
          <div className="sidenav2">
            <div className="sidenav2">
              <a href="#">Inicio</a>
            </div>
            <div>
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "70px",
                  borderTop: "1px solid grey",
                  width: "150px",
                  marginLeft: "15%"
                }}
              >
                Favoritos
              </h3>
            </div>
          </div>
        </LayoutSidebar>
        <LogoCoins>
              Mas de 5,000 criptomonedas que puedes encontrar.
            </LogoCoins>
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
