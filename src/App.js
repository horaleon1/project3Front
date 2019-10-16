import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Footer from "./components/layouts/Footer/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utilities/setAuthToken";
import PrivateRoute from "./components/Routing/PrivateRoute";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import NewsSpanish from "./components/pages/News/News";
import Price from "./components/layouts/BarPrices/BarPrices";
import Screener from "./components/pages/Screener";
import NewsEnglish from "./components/pages/News/NewsEnglish";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <Price />
            <div className="containerApp">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/portfolio" component={Portfolio} />
                <Route exact path="/screener" component={Screener} />
                <Route exact path="/newsSpanish" component={NewsSpanish} />
                <Route exact path="/newsEnglish" component={NewsEnglish} />
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
