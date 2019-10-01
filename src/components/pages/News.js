import React, { Component } from "react";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spanish: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=ES")
      .then(res => {
        const spanish = res.data.Data;
        this.setState({ spanish });
        console.log(spanish);
      });
  };

  render() {
    return (
      <div className="containerNews">
        <div className="newsSpanish">


        <h1>Noticias en Español</h1> <br/>
        <h3 style={{textAlign:"right"}}>Descrube todo lo que pasa en el mundo de las criptomonedas.</h3>
             
              
              {
               this.state.spanish.map(e => (
                <div className="containerNew" key={e.id}>
                <ul>
                <li>
                {/* <img src={this.state.spanish.imageurl} alt="News" /> */}
                <img src={e.imageurl} alt=""/>
                <h1>{e.title}</h1>
                {/* <h1> {this.state.spanish.title}.</h1> */}
                <h3>
                  <i>Fuente: </i>
                  {e.source}
                  {/* {this.state.spanish.source} */}
                </h3>
                   <a href={e.guid}> Leer Noticia </a>
                {/* <a href={this.state.spanish.guid}> Leer Noticia </a> */}
              </li>
            </ul>
          </div>
               ))
              }
              


        </div>
      </div>
    );
  }
}
