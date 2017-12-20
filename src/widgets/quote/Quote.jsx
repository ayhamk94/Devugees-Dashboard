import React from 'react';
import Spinner from '../../components/Spinner';
import './quote.css';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { existenQuote: [] }
  }

  componentDidMount() {
    var url = 'http://quotes.rest/qod.json';
    var req = new Request(url);
    var existenQuote = JSON.parse(localStorage.getItem("quote"));

    existenQuote == null
      ? fetch(req).then((response) => {
        response.json().then(data => {
          let quotes = data.contents.quotes[0];
          let quote = quotes.quote;
          let author = quotes.author;
          var object = {quote: quote, author: author};
          localStorage.setItem("quote", JSON.stringify(object));
          var existenQuote = object;
          this.setState({existenQuote});
        }).catch((err) => {console.log('Err: ', err); });
      })
      : this.setState({existenQuote});
  }

  render() {
    const {existenQuote} = this.state;
    const quote = existenQuote["quote"];
    const author = existenQuote["author"];
    return (<div>
      {
        existenQuote.length === 0
          ? <Spinner/>
          : <div className="blockquote">
              <p className="quotation-mark opening">&ldquo;</p>
              <h3 className="quote">{quote}</h3>
              <p className="quotation-mark closing">
                &rdquo;</p>
              <hr/>
              <p className="author">{author}</p>
            </div>
      }

    </div>)

  }
}
