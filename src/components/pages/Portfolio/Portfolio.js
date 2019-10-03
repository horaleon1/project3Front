import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";

import Provider from "./context/Provider";
import Favorite from "./Favorite";
import CoinsLoading from "./CoinsLoading";
import FormatCoins from "./FormatCoins";
import Coins from "./Coins";
import CoinsPortfolio from "./CoinsPortfolio";



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
          <Layout>
            {/* <LogoInv>Criptofolio</LogoInv> */}
            {/* <CoinsPortfolio /> */}
            {/* <Favorite /> */}
            {/* <Coins /> */}
            
            <CoinsLoading />
          </Layout>
      </div>
    );
  }
}
