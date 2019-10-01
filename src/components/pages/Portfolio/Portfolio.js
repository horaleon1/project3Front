import React, {Component} from "react";
// import styled from "styled-components";

const cc = require("cryptocompare");

export default class extends Component {
  constructor(props){
    super(props);

    this.state = {
      coinList:[]
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    console.log(coinList);
    this.setState = ({ coinList });
  };
  render (){
    return(
    <div className="portfolioContainer">
      <div className="barPortfolio">
        <div>NAME</div>
        <div />
        <div>Dashboard</div>
        <div>Settings</div>
      </div>
      <div className="list">
        <ul>
          <li>
          Coins:
          <span>
        {this.state.coinList.LTC}           
          </span>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
