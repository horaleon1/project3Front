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
          <div className="barUser">BTC</div>
          <ul>
            <li className="userMenu">
              <ul className="userMenuList">
                <li>
                  <a>Inicio</a>
                </li>
                <li>
                  <a>Enviar</a>
                </li>
                <li>
                  <a>Recibir</a>
                </li>
                <li>
                  <a>Ayuda</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
