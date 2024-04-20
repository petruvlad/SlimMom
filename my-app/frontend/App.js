import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import CalculatorPage from "./CalculatorPage";
import DiaryPage from "./DiaryPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/calculator" component={CalculatorPage} />
          <Route path="/diary" component={DiaryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
