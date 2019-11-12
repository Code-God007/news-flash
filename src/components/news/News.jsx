import React from "react";
import Moment from "react-moment";

const News = props => {
  const {
    author,
    description,
    title,
    url,
    urlToImage,
    source,
    publishedAt
  } = props.data;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm p-3">
        <img src={urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          {author ? (
            <p className="lead">
              <i>By {author}</i>
            </p>
          ) : (
            <p className="lead">
              <i>Source: {source.name}</i>
            </p>
          )}
          <p className="lead">
            Date: <Moment format="DD/MM/YYYY">{publishedAt}</Moment>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-block"
          >
            More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
