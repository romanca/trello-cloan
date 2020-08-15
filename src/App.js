import React, { Component } from "react";
import HomePage from "./home.js";
import MainPage from "./MainPage";
import Boards from "./components/Boards/Boards";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={HomePage} />
          <Route path='/mainpage' component={MainPage} />
          <Route path='/boards' component={Boards} />
        </div>
      </Router>
    );
  }
}

export default App;
