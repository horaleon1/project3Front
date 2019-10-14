import React, { Component } from "react";
import Video from "../../../assets/bitgo.mp4";
import PricesB from "../../layouts/BarPricesAbout/BarPricesAbout";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="paragraph1">
          <p>
            Una criptomoneda, criptodivisa (del inglés cryptocurrency) o
            criptoactivo es un medio digital de intercambio que utiliza
            criptografía fuerte para asegurar las transacciones financieras,{" "}
            controlar la creación de unidades adicionales y verificar la
            transferencia de activos. Las criptomonedas son un tipo de divisa
            alternativa y de moneda digital.
          </p>
        </div>
        <div className="paragraph2">
          <p>
            El control de cada moneda funciona a través de una base de datos
            descentralizada, usualmente una cadena de bloques (en inglés
            blockchain), que sirve como una base de datos de transacciones
            financieras pública.
          </p>
        </div>
        <div className="paragraph3">
          <p>
            La primera criptomoneda que empezó a operar fue el bitcoin en 2009
            y, desde entonces, han aparecido muchas otras con diferentes
            características y protocolos como Litecoin, Ethereum, Ripple,
            Dogecoin.
          </p>
        </div>
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
