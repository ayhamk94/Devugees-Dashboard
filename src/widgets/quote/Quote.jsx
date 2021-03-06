import React from 'react';
import Divider from 'material-ui/Divider';
import Spinner from '../../components/Spinner';
import './quote.css';

import { cors } from '../../utils.js';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { existenQuote: [] };
  }

  componentDidMount() {
    const url = `${cors}http://quotes.rest/qod.json`;
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
      <div className="quote-container">
        {
        existenQuote.length === 0
          ? <Spinner />
        : <div className="blockquote">

          <p className="quotation-mark opening">&ldquo;</p>
          <p className="quote">{quote}</p>
          <p className="quotation-mark closing">
                  &rdquo;
          </p>
          <Divider />
          <p className="author">{author}</p>
        </div>
      }

      </div>);
  }
}
