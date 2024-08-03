import React, { Component } from 'react';

export default class Card extends Component {
    

  render() {
    let  {title , description , imageUrl, newsUrl , author , date , source} = this.props ;
    return (
      <div>
        <div className="card" style={{ maxWidth: '22rem' }}>
        < span className="position-absolute top-0   translate-middle badge rounded-pill bg-danger" style={{fontSize:'15px', zIndex: "1" , left: '90%'}}>
         {source}
        </span>
          <img src={!imageUrl ? " https://thumbs.dreamstime.com/b/breaking-news-background-breaking-news-background-world-global-tv-news-banner-design-100399311.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}{description ? "" : "Click on read more"}</p>
             <p className="card-text"><small className="text-body-secondary">By {this.props.author} on {new Date(this.props.date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
