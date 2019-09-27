import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Explorer from "./components/layouts/Explorer";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
// import Alerts from './components/layouts/Alerts';
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="containerApp">
            
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/explorer" component={Explorer} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
