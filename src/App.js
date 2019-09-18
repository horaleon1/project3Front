import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from './components/layouts/Footer';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
