import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'react-slick';
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
    var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7254920ef5694ef2a9295aad66f86c15';
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
    <div className="articles">
      <h2 >{article.author}
      </h2>
      <img className="news-logo" src="https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/A4CA/production/_97668124_p01tlf61.jpg" alt="bbc-news"></img>
      <h3 >{article.title}
      </h3>
      <span className="description" >{article.description}
      </span>
      <a href={article.url}>
        <i>More info...</i>
      </a>
    </div>);
    return listNewsArticles;
  }

  render() {
    const articles = this.state.articles;
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 10000
    };
    console.log(articles)
    return (<div>
      <Slider {...settings} arrows={false} autoplay={true} className="slider">{this.articlesList(articles)}</Slider>
      <TextField/>
    </div>)
  }

}
