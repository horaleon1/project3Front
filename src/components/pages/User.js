import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cryptos: []
  //   };
  // }
  // componentDidMount(){
  //   axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
  //   .then(res => {
  //     const cryptos = res.data;
  //     console.log(cryptos);
  //     this.setState({cryptos: cryptos});
  //   })
  // }

  render() {
    return (
      <div>
        <div className="sidebarUser">

          <div className="barUser"> BTC
          {/* {Object.keys(this.state.cryptos).map((key) => (
            <div>
              <span>{key}</span>
              <span>{this.state.cryptos[key].USD}</span>
            </div>
          ))} */}
          </div>
          <ul>
            <li className="userMenu">
              <ul className="userMenuList">
                <li>
                  <a href="">Inicio</a>
                </li>
                <li>
                  <a href="">Enviar</a>
                </li>
                <li>
                  <a href="">Recibir</a>
                </li>
                <li>
                  <a href="">Salir</a>
                </li>
                <li>
                  <a href="">Ayuda</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
