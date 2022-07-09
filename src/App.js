import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import { Provider } from 'react-redux'
import Header from "./components/Header";
import './App.css';
import store from "./app/store";
import Home from "./components/Home";
// import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/detail/:id">
            <Detail />
          </Route> */}
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
