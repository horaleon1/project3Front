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
        spanish2.source =
          spanish2.source.charAt(0).toUpperCase() + spanish2.source.substr(1);
        const spanish3 = res.data.Data[48];
        spanish3.source =
          spanish3.source.charAt(0).toUpperCase() + spanish3.source.substr(1);
        const spanish4 = res.data.Data[47];
        spanish4.source =
          spanish4.source.charAt(0).toUpperCase() + spanish4.source.substr(1);
        this.setState({ spanish });
        this.setState({ spanish2 });
        this.setState({ spanish3 });
        this.setState({ spanish4 });
        console.log(spanish2);
      });
  };

  render() {
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${this.state.spanish3.guid}`;

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
                <a
                  href={this.state.spanish2.guid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer Noticia{" "}
                </a>
                <img src={this.state.spanish2.imageurl} alt="News" />
              </div>


              {/* <div
                class="fb-share-button"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-layout="button"
                data-size="small"
              >
                <a
                  target="_blank"
                  href={facebookShare}
                  class="fb-xfbml-parse-ignore"
                >
                  Compartir
                </a>
              </div> */}


            </li>
            <li>
              <div className="news2">
                <h1> {this.state.spanish3.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.spanish3.source}
                </h3>
                <a
                  href={this.state.spanish3.guid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Leer Noticia{" "}
                </a>
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
                <a
                  href={this.state.spanish4.guid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Leer Noticia{" "}
                </a>
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
                    {e.source}
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
