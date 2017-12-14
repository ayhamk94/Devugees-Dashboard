import React from 'react';
import TextField from 'material-ui/TextField';
import Spinner from '../../components/Spinner';
import './quote.css';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      author: []
    };

  }

  componentDidMount() {
    var url = 'http://quotes.rest/qod.json';
    var req = new Request(url);
    fetch(req).then((response) => {
      response.json().then(data => {
        //    console.log('data: ', data)
        let quotes = data.contents.quotes[0];
        let quote = quotes.quote;
        let author = quotes.author;
        this.setState({quote, author});

      }).catch((err) => {
        //  console.log('Err: ', err);
      });
    })
  }

  render() {
    const {quote, author} = this.state;

    return (<div>
      {
        quote.length == 0 && author.length == 0
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
