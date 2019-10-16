import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './news.css';

require('dotenv');

const cc = require("cryptocompare");
cc.setApiKey(
  process.env.REACT_API
);

const Loader = () => (
  <h1 className="loader">
    <i className="fas fa-spinner fa-spin"></i>
  </h1>
);

export default class NewsEnglish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      english: [],
      loading:false
    };
  }

  componentDidMount = () => {
      this.showLoader();
    cc.newsList('EN')
    .then(newsList => {
      const english = newsList;
       this.setState( { english });
       this.hideLoader();
    }).catch(console.error)
       this.hideLoader();
  };

  hideLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  showLoader = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    // const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${this.state.english.guid}`;

    return (
      <div className="containerNews">

        { !this.state.loading ?
         <div className="news">
         <ul>
           <li>
             {this.state.english.slice(48, 49).map(e => (
               <div className="news1" key={e.id}>
                 <div className="seccion1News1">
                   <h1> {e.title}.</h1>
                   <a href={e.guid} target="_blank" rel="noopener noreferrer">
                     Read More
                   </a>
                   <h4>
                     <i>Fuente: </i>
                     {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                   </h4>
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
                   <a href={e.guid} target="_blank" rel="noopener noreferrer">
                   Read More
                   </a>
                   <h4>
                     <i>Fuente: </i>
                     {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                   </h4>
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
                   <a href={e.guid} target="_blank" rel="noopener noreferrer">
                   Read More
                   </a>
                   <h4>
                     <i>Fuente: </i>
                     {e.source.charAt(0).toUpperCase() + e.source.substr(1)}
                   </h4>
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
       </div> : <Loader />
      }


        <div className="newsSpanish">
          <div className="textNews">
            <h3>
            Discover the latest 
            news from the world of cryptocurrencies 
            in English.
            </h3>
            <Link to="/newsSpanish">News in Spanish</Link>
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
