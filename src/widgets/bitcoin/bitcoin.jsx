import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Spinner from '../../components/Spinner';
import bitCoinWidget from './Bitcoin-icon.png';

const styles = {
  rate: {
    textAlign: 'justify',
  },
};
export default class Bitcoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.interval()
    setTimeout(this.interval, 60000)
  }
  interval = () => {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch(url).then(resp => resp.json()).then((bitocoinData) => {
      this.setState({ data: bitocoinData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ height: '100%' }}>
        {
        data && data.bpi ?
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

              <span><img style={{ width: '64px', height: '64px' }} alt="bitcoin icon" src={bitCoinWidget} /></span>
              <h1>Rate</h1>
            </div>

            <div style={styles.rate}>
              <List>
                <Subheader><strong>Rate</strong></Subheader>
                <ListItem primaryText={`${data.bpi.USD.rate.toString()} $`} />
                <ListItem primaryText={`${data.bpi.EUR.rate.toString()} €`} />
                <ListItem primaryText={`${data.bpi.GBP.rate.toString()} £`} />
              </List>

              <br />
              <br />
              <small><div>Updated: <br /> {data.time.updated}</div></small>

            </div>
          </div>
        :
          <Spinner />
      }
      </div>
    );
  }
}
