import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./news.css";
// import {
//   // TwitterTimelineEmbed
//   TwitterShareButton,
//   // TwitterFollowButton,
//   // TwitterHashtagButton,
//   // TwitterMentionButton,
//   // TwitterTweetEmbed,
//   // TwitterMomentShare,
//   // TwitterDMButton,
//   // TwitterVideoEmbed,
//   // TwitterOnAirButton
// } from "react-twitter-embed";

require("dotenv");

const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_API);

const Loader = () => (
  <h1 className="loader">
    <i className="fas fa-spinner fa-spin"></i>
  </h1>
);

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spanish: [],
      loading: false
    };
  }

  componentDidMount = () => {
    this.showLoader();
    cc.newsList("ES")
      .then(newsList => {
        const spanish = newsList;
        this.setState({ spanish });
        this.hideLoader();
      })
      .catch(console.error);
    this.hideLoader();
  };
  hideLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  showLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    return (
      <div className="containerNews">
        {!this.state.loading ? (
          <div className="news">
            <ul>
              <li>
                {this.state.spanish.slice(48, 49).map(e => (
                  <div className="news1" key={e.id}>
                    <div className="seccion1News1">
                      <h1> {e.title}.</h1>
                      <a
                        href={e.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leer Noticia
                      </a>
                      <h4>
                        <i>Fuente: </i>
                        {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                      </h4>
                      <img src={e.imageurl} alt="News" />
                    </div>
                    <div
                      className="fb-share-button"
                      data-href={e.guid}
                      data-layout="button"
                    ></div>
                    {/* <div className="twitterShareButton">
                    <TwitterShareButton
                      url={e.guid}
                      options={{
                        text: e.title,
                        via: e.source
                      }}
                    />
                  </div> */}
                  </div>
                ))}
              </li>
              <li>
                {this.state.spanish.slice(47, 48).map(e => (
                  <div className="news1" key={e.id}>
                    <div className="seccion1News1">
                      <h1> {e.title}.</h1>
                      <a
                        href={e.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leer Noticia
                      </a>
                      <h4>
                        <i>Fuente: </i>
                        {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                      </h4>
                      <img src={e.imageurl} alt="News" />
                    </div>
                    <div
                      className="fb-share-button"
                      data-href={e.guid}
                      data-layout="button"
                    ></div>
                    {/* <div className="twitterShareButton">
                    <TwitterShareButton
                      url={e.guid}
                      options={{
                        text: e.title,
                        via: e.source
                      }}
                    />
                  </div> */}
                  </div>
                ))}
              </li>
              <li>
                {this.state.spanish.slice(46, 47).map(e => (
                  <div className="news1" key={e.id}>
                    <div className="seccion1News1">
                      <h1> {e.title}.</h1>
                      <a
                        href={e.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leer Noticia
                      </a>
                      <h4>
                        <i>Fuente: </i>
                        {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                      </h4>
                      <img src={e.imageurl} alt="News" />
                    </div>
                    <div
                      className="fb-share-button"
                      data-href={e.guid}
                      data-layout="button"
                    ></div>
                    {/* <div className="twitterShareButton">
                    <TwitterShareButton
                      url={e.guid}
                      options={{
                        text: e.title,
                        via: e.source
                      }}
                    />
                  </div> */}
                  </div>
                ))}
              </li>
            </ul>
          </div>
        ) : (
          <Loader />
        )}

        <div className="newsSpanish">
          <div className="textNews">
            <h3>Descrube todo lo que pasa en el mundo de las criptomonedas.</h3>
            <Link to="/newsEnglish">Noticias en Inglés</Link>
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
                  <div
                    className="fb-share-button"
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
