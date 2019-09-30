import React, { Component } from 'react'
import Video from "../../assets/bitgo.mp4";
import PricesB from '../layouts/PricesB';


export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
      <p>
      Un blockchain o una cadena de bloques,
      es una lista creciente <br/> de registros, llamados bloques, que están 
      vinculados  mediante <br/> criptografía. Cada bloque contiene un hash 
      criptográfico del <br/>bloque anterior, una marca de tiempo y datos de
      transacciones.
      </p>

      <p>
      Por diseño, una cadena de bloques es resistente a la modificación <br/>de los datos.
       Lo que la hace muy segura para transaccionar. 
      </p>

      {/* <h3>
        Mandar dinero a cualquier parte del <br/>
      mundo por una fracción.
      </h3> */}

      <div className="containerVideoAbout">
        <video autoPlay >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <PricesB />
      <div className="afterPricesB">

      </div>
     

    </div>
    )
  }
}
