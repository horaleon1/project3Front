import React, { Component } from "react";
import Layout from "./Layout";


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
          </Layout>
      </div>
    );
  }
}
