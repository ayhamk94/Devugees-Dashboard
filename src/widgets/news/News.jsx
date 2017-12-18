import React from 'react';
import Slider from 'react-slick';
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
    var url = 'https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=7254920ef5694ef2a9295aad66f86c15';
    var req = new Request(url);

    fetch(req).then((response) => {
      response.json().then(data => {
        var dataArticles = data.articles;
        this.setState({articles: dataArticles})
      });
    })
  }

  articlesList(articles) {

    const listNewsArticles = articles.map((article) =>
    <div key={article.title} className="articles">
      <h2 >{!article.author? 'Ars Technica' : article.author}
      </h2>
      <img className="news-logo" src={article.urlToImage} alt="news"></img>
      <h3 className= "text-title">{article.title}
      </h3>
      <p className="description" >{article.description}
      </p>
      <a href={article.url}>
        <i>More info...</i>
      </a>
    </div>);
    return listNewsArticles;
  }

  render() {
    const {articles}  = this.state;
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 10000
    };
    return (<div>
      {articles.length == 0 ? <Spinner /> :
      <Slider {...settings} arrows={false} autoplay={true} className="slider-news">{this.articlesList(articles)}</Slider>}
    </div>)
  }

}