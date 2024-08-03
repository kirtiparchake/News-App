import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=494308ad6f2d425896135409dd18c166&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults, 
      loading: false 
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  }

  render() {
    return (
      <div className='container my-3 mx-5'>
        <h1 className='text-center text-white'>NewsMonkey - {this.props.category === 'general' ? 'top' : this.props.category} Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-5 mx-auto">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url} style={{ display: 'flex', justifyContent: 'center' }}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                  author={element.author} 
                  date={element.publishedAt} 
                  source={element.source.name} // make sure source.name is passed
                />
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
