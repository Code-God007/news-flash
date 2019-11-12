import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import NewsContextProvider from "./contexts/NewsContext";
import LatestNews from "./components/news/LatestNews";
import Search from "./components/news/Search";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <NewsContextProvider>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <Search />
                <LatestNews />
              </Route>
            </Switch>
          </Router>
        </div>
      </NewsContextProvider>
    </React.Fragment>
  );
}

export default App;
