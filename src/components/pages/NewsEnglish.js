import React, { Component } from "react";
import axios from "axios";

// const random = Math.floor(Math.random() * (49 - +47) + +47);

export default class NewsEnglish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      english: [],
      english2: [],
      english3: [],
      english4: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then(res => {
        const english = res.data.Data;
        const english2 = res.data.Data[49];
        english2.source =
          english2.source.charAt(0).toUpperCase() + english2.source.substr(1);
        const english3 = res.data.Data[48];
        english3.source =
          english3.source.charAt(0).toUpperCase() + english3.source.substr(1);
        const english4 = res.data.Data[47];
        english4.source =
          english4.source.charAt(0).toUpperCase() + english4.source.substr(1);
        this.setState({ english });
        this.setState({ english2 });
        this.setState({ english3 });
        this.setState({ english4 });
        console.log(english2);
      });
  };

  render() {
    return (
      <div className="containerNews">
        <div className="news">
          <ul>
            <li>
              <div className="news1">
                <h1> {this.state.english2.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.english2.source}
                </h3>
                <a href={this.state.english2.guid} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Read More{" "}
                </a>
                <img src={this.state.english2.imageurl} alt="News" />
              </div>

            </li>
            <li>
              <div className="news2">
                <h1> {this.state.english3.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.english3.source}
                </h3>
                <a href={this.state.english3.guid} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Read More{" "}
                </a>
                <img src={this.state.english3.imageurl} alt="News" />
              </div>
            </li>
            <li>
              <div className="news3">
                <h1> {this.state.english4.title}.</h1>
                <h3>
                  <i>Fuente: </i>
                  {this.state.english4.source}
                </h3>
                <a href={this.state.english4.guid} target="_blank" rel="noopener noreferrer">
                  Read More{" "}
                </a>
                <img src={this.state.english4.imageurl} alt="News" />
              </div>
            </li>
          </ul>
        </div>

        <div className="newsSpanish">
          <div className="textNews">
            <h3>
            Discover the latest <br />
            news from the world<br />
            of cryptocurrencies.
            </h3>
              
            <a href="/news">News on Spanish</a>
          </div>

          {this.state.english.map(e => ( 
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
                    Read More
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

