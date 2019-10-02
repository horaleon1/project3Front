import React, { Component } from "react";
import Context from './Context';
 


export default class Provider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "Inicio",
      ...this.savedSettings(),
      setPage: this.setPage
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
