import React, { Component } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export default class Search extends Component {
  state = {
    newsTitle: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findNews = (dispatch, e) => {
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${this.state.newsTitle}&pageSize=6&sortBy=publishedAt&apiKey=9d32730996ae427c9faea584b646ab79`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "SEARCH_NEWS",
          payload: data.articles
        });

        this.setState({ newsTitle: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <NewsContext.Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card card-body mb-4 p-4">
                <h1 className="display-4 text-center">
                  <i className="fas fa-search"></i> Get Latest News
                </h1>
                <p className="lead text-center">Search any keyword</p>
                <form onSubmit={this.findNews.bind(this, dispatch)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="News Title..."
                      name="newsTitle"
                      value={this.state.newsTitle}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block mb-5"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </NewsContext.Consumer>
    );
  }
}
