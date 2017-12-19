import React from 'react';
import Spinner from '../../components/Spinner';

export default class Bitcoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch(url).then(resp => resp.json()).then((bitocinData) => {
      console.log("bitcoin data")
      this.setState({ data: bitocinData });
      console.log(this.state.data)
      
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ height: '100%' }}>
        {
        data ?
          <div>
           { data.chartName}
          </div>
        :
          <Spinner />
      }
      </div>
    );
  }
}
