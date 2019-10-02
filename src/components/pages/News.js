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
      });
  };

  render() {
    // const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${this.state.spanish.guid}`;

    return (
      <div className="containerNews">
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0"
        ></script>
        
        <div className="news">
          <ul>
            <li>
              {this.state.spanish.slice(46, 49).map(e => (
                <div className="news1" key={e.id}>
                  <h1> {e.title}.</h1>
                  <h3>
                    <i>Fuente: </i>
                    {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                  </h3>
                  <a href={e.guid} target="_blank" rel="noopener noreferrer">
                    Leer Noticia
                  </a>
                  <img src={e.imageurl} alt="News" />

                  <div
                    class="fb-share-button"
                    data-href={e.guid}
                    data-layout="button"
                  ></div>
                </div>
              ))}
            </li>
          </ul>
        </div>

        <div className="newsSpanish">
          <div className="textNews">
            <h3>
              Descrube todo <br />
              lo que pasa en <br />
              el mundo de las <br /> criptomonedas.
            </h3>
            <a href="/newsEnglish">Noticias en Inglés</a>
          </div>
          {this.state.spanish.map(e => (
            <div className="containerNew" key={e.id}>
              <ul>
                <li>
                  <img src={e.imageurl} alt="" />
                  <h1>{e.title}</h1>
                  <h3>
                    <i>Fuente: </i>
                    {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                  </h3>
                  <a href={e.guid} target="_blank" rel="noopener noreferrer">
                    Leer Noticia{" "}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
