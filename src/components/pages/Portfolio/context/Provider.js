import React, { Component } from "react";
// import Context from './Context';

export const Context = React.createContext();

export default class Provider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "Inicio",
      ...this.savedSettings(),
      setPage: this.setPage,
      filterCoins : this.filterCoins
    };
  }
  confirmFavorites = () => {
    this.setState({
      fisrtVisit:false,page:"Inicio"
    });
      localStorage.setItem('Mundo Blockchain',JSON.stringify({
        test:"hello"
      }));
  }

  savedSettings(){
    let siteData = JSON.parse(localStorage.getItem('Mundo Blockchain'));
    if(!siteData){
      return {page:"Inicio", firstVisit:true}       
    }
    return {};
  }
  setPage = page => this.setState({ page });

  filterCoins = (filteredCoins) => this.setState({filteredCoins});

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
