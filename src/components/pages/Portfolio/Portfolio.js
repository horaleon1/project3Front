import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import LayoutSidebar from "./LayoutSidebar";
import Provider from './context/Provider';

const Logo = styled.div`
  font-size: 2em;
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
    console.log(coinList);
    this.setState = { coinList };
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
          </Layout>
        </Provider>
      </div>
    );
  }
}
