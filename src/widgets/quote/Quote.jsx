import React from 'react';
import Spinner from '../../components/Spinner';
import './quote.css';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { existenQuote: [] };
  }

  componentDidMount() {
    const url = 'http://quotes.rest/qod.json';
    const req = new Request(url);
    const existenQuote = JSON.parse(localStorage.getItem('quote'));

    existenQuote == null
      ? fetch(req).then((response) => {
        response.json().then((data) => {
          const quotes = data.contents.quotes[0];
          const quote = quotes.quote;
          const author = quotes.author;
          const object = { quote, author };
          localStorage.setItem('quote', JSON.stringify(object));
          const existenQuote = object;
          this.setState({ existenQuote });
        });
      })
      : this.setState({ existenQuote });
  }

  render() {
    const { existenQuote } = this.state;
    const quote = existenQuote.quote;
    const author = existenQuote.author;
    return (
      <div>
        {
        existenQuote.length === 0
          ? <Spinner />
        : <div className="blockquote">
          <p className="quotation-mark opening">&ldquo;</p>
          <h3 className="quote">{quote}</h3>
          <p className="quotation-mark closing">
                  &rdquo;
          </p>
          <hr />
          <p className="author">{author}</p>
        </div>
      }

      </div>);
  }
}
