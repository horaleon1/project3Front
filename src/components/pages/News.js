import React, { Component } from "react";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spanish: [],
      spanish2: [],
      spanish3: [],
      spanish4: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=ES")
      .then(res => {
        const spanish = res.data.Data;
        const spanish2 = res.data.Data[49];
        const spanish3 = res.data.Data[48];
        const spanish4 = res.data.Data[47];
        this.setState({ spanish });
        this.setState({ spanish2 });
        this.setState({ spanish3 });
        this.setState({ spanish4 });
        console.log(spanish2);
      });
  };

  render() {
    return (
      <div className="containerNews">
        <div className="news">
          <ul>
            <li>
              <div className="news1">
                <h1> {this.state.spanish2.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.spanish2.source}
                </h3>
                <a href={this.state.spanish2.guid}> Leer Noticia </a>
                <img src={this.state.spanish2.imageurl} alt="News" />
              </div>
            </li>
            <li>
              <div className="news2">
                <h1> {this.state.spanish3.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.spanish3.source}
                </h3>
                <a href={this.state.spanish3.guid}> Leer Noticia </a>
                <img src={this.state.spanish3.imageurl} alt="News" />
              </div>
            </li>
            <li>
              <div className="news3">
                <h1> {this.state.spanish4.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.spanish4.source}
                </h3>
                <a href={this.state.spanish4.guid}> Leer Noticia </a>
                <img src={this.state.spanish4.imageurl} alt="News" />
              </div>
            </li>
          </ul>
        </div>

        <div className="newsSpanish">
          <div className="textNews">
            <h3>
              Descrube todo <br />
              lo que pasa en <br />
              el mundo de las criptomonedas.
            </h3>
          </div>
          {this.state.spanish.map(e => (
            <div className="containerNew" key={e.id}>
              <ul>
                <li>
                  {/* <img src={this.state.spanish.imageurl} alt="News" /> */}
                  <img src={e.imageurl} alt="" />
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
          ))}
        </div>
      </div>
    );
  }
}
