import React, { Component } from "react";
import Video from "../../assets/bitgo.mp4";
import PricesB from "../layouts/PricesB";

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <p>
          Una criptomoneda, criptodivisa (del inglés cryptocurrency) o <br />
          criptoactivo es un medio digital de intercambio que utiliza <br />
          criptografía fuerte para asegurar las transacciones financieras,{" "}
          <br />
          controlar la creación de unidades adicionales y verificar la <br />
          transferencia de activos. Las criptomonedas son un tipo de <br />
          divisa alternativa y de moneda digital. <br />
          <br />
          El control de cada moneda funciona a través de una base de <br />
          datos descentralizada, usualmente una cadena de bloques <br />
          (en inglés blockchain), que sirve como una base de datos de <br />
          transacciones financieras pública. <br />
          <br />
          La primera criptomoneda que empezó a operar fue el bitcoin <br />
          en 2009 y, desde entonces, han aparecido muchas otras con <br />
          diferentes características y protocolos como Litecoin, <br />
          Ethereum, Ripple, Dogecoin.
        </p>

        <div className="containerVideoAbout">
          <video autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <PricesB />
        <div className="afterPricesB"></div>
      </div>
    );
  }
}
