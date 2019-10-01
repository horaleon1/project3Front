import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Sidebar from "./Sidebar";

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
        <Sidebar />
        <Layout>
          <Logo>Criptofolio</Logo>
        </Layout>
      </div>
    );
  }
}
