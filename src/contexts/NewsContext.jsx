import React, { Component, createContext } from "react";

export const NewsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NEWS":
      return {
        ...state,
        news: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

class NewsContextProvider extends Component {
  state = {
    news: [],
    heading: "Latest News",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&pageSize=6&sortBy=publishedAt&apiKey=9d32730996ae427c9faea584b646ab79"
    )
      .then(res => res.json())
      .then(data => this.setState({ news: data.articles }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <NewsContext.Provider value={this.state}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

export default NewsContextProvider;
