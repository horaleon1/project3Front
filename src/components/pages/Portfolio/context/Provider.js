import React, { Component } from "react";
import Context from './Context';
 


export default class Provider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "Balance"
    };
  }
  setPage = page => this.setState({ page });

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
