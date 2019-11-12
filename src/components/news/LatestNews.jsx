import React, { Component } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import News from "./News";
import Spinner from "../layout/Spinner";

export default class LatestNews extends Component {
  render() {
    return (
      <NewsContext.Consumer>
        {value => {
          const { news, heading } = value;
          if (news === undefined || news.length === 0) {
            return <Spinner />;
          } else
            return (
              <React.Fragment>
                <h1 className="display-4 text-center mb-4">{heading}</h1>
                <div className="row">
                  {news.map((n, index) => (
                    <News key={index} data={n} />
                  ))}
                </div>
              </React.Fragment>
            );
        }}
      </NewsContext.Consumer>
    );
  }
}
