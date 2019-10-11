import React, { Component } from "react";
import Layout from "./Layout";
import CoinsLoading from './CoinsLoading';


export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }


  render() {
    return (
      <div className="portfolioContainer">
          <Layout>
            <CoinsLoading/>
          </Layout>
      </div>
    );
  }
}
