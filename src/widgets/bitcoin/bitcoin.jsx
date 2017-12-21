import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
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
    this.tick = () => setInterval(this.interval, 60000)
    this.state = { data: [] };
  }
  componentDidMount() {
    this.interval()
    this.tick()
  }
  componentWillUnmount(){
    clearInterval(this.tick)
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
      <div>
        {
        data && data.bpi ?
          <div style={{ minHeight: '350px', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span><img style={{ width: '64px', height: '64px' }} alt="bitcoin icon" src={bitCoinWidget} /></span>
                <h1 className="main-header">Rate</h1>
              </div>
              <Divider />
            </div>

            <div style={styles.rate}>
              <List>
                <ListItem primaryText={`${data.bpi.USD.rate.split("").slice(0, -2).join("")} $`} />
                <ListItem primaryText={`${data.bpi.EUR.rate.split("").slice(0, -2).join("")} €`} />
                <ListItem primaryText={`${data.bpi.GBP.rate.split("").slice(0, -2).join("")} £`} />
              </List>
            </div>
            <div>
              <Divider />
              <Subheader>Updated: {data.time.updated}</Subheader>
            </div>
          </div>
        :
          <Spinner />
      }
      </div>
    );
  }
}
