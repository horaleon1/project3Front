import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import LayoutSidebar from "./LayoutSidebar";
import Provider from "./context/Provider";
import Favorite from "./Favorite";
import CoinsLoading from "./CoinsLoading";
import FormatCoins from "./FormatCoins";
import Coins from './Coins';

const Logo = styled.div`
  font-size: 2em;
  margin-left:160px;
  margin-bottom: 30px;
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
            <Sidebar />
          </LayoutSidebar>
          <Layout>
            <Logo>Criptofolio</Logo>
            <Favorite />
            {/* <Coins /> */}
            <CoinsLoading />
          </Layout>
        </Provider>
      </div>
    );
  }
}
