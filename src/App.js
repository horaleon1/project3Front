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
import setAuthToken from "./utilities/setAuthToken";
import PrivateRoute from './components/Routing/PrivateRoute';
import Portfolio from './components/pages/Portfolio/Portfolio';
import News from './components/pages/News';
// import WalletState from "./context/wallet/WalletState";
import User from './components/pages/User';
import Price from './components/layouts/Prices';
import English from './components/pages/NewsEnglish';
import "./App.css";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        {/* <WalletState> */}
          <Router>
            <Fragment>
              <Navbar />
              <Price />
              <div className="containerApp">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/explorer" component={Explorer} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/news" component={News} />
                  <Route exact path="/newsEnglish" component={English} />
                  <PrivateRoute exact path="/user" component={User} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        {/* </WalletState> */}
      </AlertState>
    </AuthState>
  );
};

export default App;
