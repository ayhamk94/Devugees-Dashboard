import React from 'react';
import TextField from 'material-ui/TextField';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: ' ' };
    this.state = { title: ' ' };
    this.state = { description: ' ' };
    this.state = { url: ' '  };

  }

  componentDidMount() {
    var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7254920ef5694ef2a9295aad66f86c15';

    var req = new Request(url);

    fetch(req).then((response) => {
      response.json().then(data => {
        console.log(data);
        var news = data.articles;
        for (var i = 0; i < news.length; i++) {

          console.log(news[i]);

          let author = data.articles[0].author
          var title = news[i].title
          console.log(title);
          //  var title = data.articles[0].title
          var description = data.articles[0].description
          var url = data.articles[0].url

          this.setState({author: author})
          this.setState({title: title})
          this.setState({description: description})
          this.setState({url: url})
        }
      });
    })
  }

  render() {
    return (<div>
      <h2>{this.state.author}</h2>
      <h3>{this.state.title}</h3>
      <h4>{this.state.description}</h4>
      <a href={this.state.url} target="_blank">more..</a>

      <TextField/>
    </div>)
  }

}
export default News;
