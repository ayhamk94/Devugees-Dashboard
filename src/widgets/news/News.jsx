import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Spinner from '../../components/Spinner';
import './news.css';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.articlesList = this.articlesList.bind(this);
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=7254920ef5694ef2a9295aad66f86c15';
    const req = new Request(url);

    fetch(req).then((response) => {
      response.json().then((data) => {
        const dataArticles = data.articles;
        this.setState({ articles: dataArticles });
      });
    });
  }

  articlesList(articles) {
    const listNewsArticles = articles.map(article => (
      <div key={article.title} className="articles">
        <div className="news-logo"><img  src={article.urlToImage} alt="news" /></div>
        <p className="news-title">{article.title}
        </p>
        <p className="news-description">{article.description}
          <a href={article.url}>  more...
          </a>
        </p>

        <p className="news-author">
        — {
          !article.author
            ? 'Ars Technica'
            : article.author
        }
        </p>

      </div>));
    return listNewsArticles;
  }

  render() {
    const { articles } = this.state;
    const settings = {
      showStatus: false,
      showIndicators: false,
      useKeyboardArrows: true,
      autoPlay: true,
      interval: 10000,
      stopOnHover: true,
      transitionTime: 500,
      emulateTouch: true,
      infiniteLoop: true,
      showThumbs: false
    };
    return (
      <div className="wrapper-news">
        <h1 className="main-header titel-news-widget ">Ars Technica</h1>
        {
        articles.length === 0
          ? <Spinner />
          : <Carousel {...settings}>{this.articlesList(articles)}</Carousel>
      }
      </div>);
  }
}
