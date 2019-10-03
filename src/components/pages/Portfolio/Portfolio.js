import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Sidebar2 from "./Sidebar2";
import LayoutSidebar from "./LayoutSidebar";
import Provider from "./context/Provider";
import Favorite from "./Favorite";
import CoinsLoading from "./CoinsLoading";
import FormatCoins from "./FormatCoins";
import Coins from "./Coins";
import CoinsPortfolio from "./CoinsPortfolio";

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
  margin-left: 220px;
  margin-bottom: 20px;
  margin-top: 40px;
  letter-spacing: 3px;
  color: #141747;
`;

const cc = require("cryptocompare");

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    // console.log(coinList);
    this.setState({ coinList });
  };
  render() {
    return (
      <div className="portfolioContainer">
        <Provider>
          <LayoutSidebar>
            <Sidebar2 />
          </LayoutSidebar>
          <Layout>
            <LogoInv>Criptofolio</LogoInv>
            <CoinsPortfolio />
            {/* <Favorite /> */}
            {/* <Coins /> */}
            <LogoCoins>Mas de 5,000 criptomonedas que puedes agregar</LogoCoins>
            <CoinsLoading />
          </Layout>
        </Provider>
      </div>
    );
  }
}
