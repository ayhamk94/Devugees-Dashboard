import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Spinner from '../../components/Spinner';


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
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch(url).then(resp => resp.json()).then((bitocoinData) => {
      this.setState({ data: bitocoinData });
    });
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div style={{ height: '100%' }}>
        {
        data && data.bpi?
          <div>
            <h1>Bitcoin Rate</h1>
            <div style={styles.rate}>
            <List>
            Rate:
                <ListItem primaryText={data.bpi.USD.rate.toString()+" $"}  />
                <ListItem primaryText={data.bpi.EUR.rate.toString()+" €"} />
                <ListItem primaryText={data.bpi.GBP.rate.toString()+" £"} />
              </List>
            <div>Updated: <br/> {data.time.updated}</div>
              <br/>
              <br/>
              <small>{ data.disclaimer }</small>

            </div>
          </div>
        :
          <Spinner />
      }
      </div>
    );
  }
}
