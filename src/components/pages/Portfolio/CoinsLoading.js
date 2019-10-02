import React, { Component } from "react";
import axios from "axios";

// const cc = require("cryptocompare");



export default class CoinsLoading extends Component {

 

  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }
  

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(res => {
        const coinList = res.data.Data;
        console.log(coinList);
        this.setState({ coinList });
      });
  };

  // componentDidMount = () => {
  //   axios
  //     .get("https://min-api.cryptocompare.com/data/all/coinlist")
  //     .then(res => {
  //       const lista = res.data;
  //       console.log(lista);
  //       this.setState({ coinList: lista });
  //     });
  // };
  render() {
    const lista = (
      <ul>
        {Object.keys(this.state.coinList).map(key => (
          <li key={key.id}>{key}</li>
        ))}
      </ul>
    );
    const cargandoLista = (
      <ul>
        <li>
          <h2>Cargando todas las Monedas</h2>
        </li>
      </ul>
    )
    return <div className="coinsLoading">
      {
        this.state.coinList ? lista : cargandoLista
      }
    </div>;
  }

  //   render() {
  //     const { coinList } = this.state
  //     return (
  //       <div>
  //         <ul>
  //           {coinList && coinList = new Map(Objc).map(e => (
  //             <li key={e.id}>
  //              {e}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   }
}
