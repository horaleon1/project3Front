import React, { Component } from "react";
import axios from "axios";

export default class NewsEnglish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      english: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then(res => {
        const english = res.data.Data;

        this.setState({ english });
      });
  };

  render() {
    // const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${this.state.english.guid}`;

    return (
      <div className="containerNews">
        <div className="news">
          <ul>
            <li>
              {this.state.english.slice(48, 49).map(e => (
                <div className="news1" key={e.id}>
                  <div className="seccion1News1">
                    <h1> {e.title}.</h1>
                    <h3>
                      <i>Fuente: </i>
                      {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                    </h3>
                    <a href={e.guid} target="_blank" rel="noopener noreferrer">
                      Leer Noticia
                    </a>

                    <img src={e.imageurl} alt="News" />
                  </div>
                  <div
                    class="fb-share-button"
                    data-href={e.guid}
                    data-layout="button"
                  ></div>
                </div>
              ))}
            </li>
            <li>
              {this.state.english.slice(47, 48).map(e => (
                <div className="news1" key={e.id}>
                  <div className="seccion1News1">
                    <h1> {e.title}.</h1>
                    <h3>
                      <i>Fuente: </i>
                      {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                    </h3>
                    <a href={e.guid} target="_blank" rel="noopener noreferrer">
                      Leer Noticia
                    </a>

                    <img src={e.imageurl} alt="News" />
                  </div>
                  <div
                    class="fb-share-button"
                    data-href={e.guid}
                    data-layout="button"
                  ></div>
                </div>
              ))}
            </li>
            <li>
              {this.state.english.slice(46, 47).map(e => (
                <div className="news1" key={e.id}>
                  <div className="seccion1News1">
                    <h1> {e.title}.</h1>
                    <h3>
                      <i>Fuente: </i>
                      {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                    </h3>
                    <a href={e.guid} target="_blank" rel="noopener noreferrer">
                      Leer Noticia
                    </a>

                    <img src={e.imageurl} alt="News" />
                  </div>
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
            Discover the latest <br/>
            news from the world <br/>
            of cryptocurrencies <br/>
            in English.
            </h3>
            <a href="/news">News in Spanish </a>
          </div>
          {this.state.english.map(e => (
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
                    Read More{" "}
                  </a>
                  <div
                    class="fb-share-button"
                    data-href={e.guid}
                    data-layout="button"
                  ></div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
