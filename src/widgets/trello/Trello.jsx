import React from 'react';
import Trello from 'node-trello';
import { List, ListItem } from 'material-ui/List';

import './trello.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';
import ApiKey from './ApiKey';


export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = { trello: [] };
  }
  componentWillMount() {
    const local = localStorage.getItem('trello-db');
    if (local === null) {
      localStorage.setItem('trello-db', JSON.stringify([]));
    }
  }
  componentDidMount() {
    this.handleData();
  }

  handleState(trello) {
    this.setState({ trello });
  }

  handleData = () => {
    const trello = JSON.parse(localStorage.getItem('trello-db'));
    if (trello.api_key && trello.token && trello.board_id) {
      const t = new Trello(trello.api_key, trello.token);

      t.get(`/1/boards/${trello.board_id}/lists`, { cards: 'open' }, (err, trello) => {
        if (err) throw err;
        this.handleState(trello);
      });

      // URL arguments are passed in as an object.
      t.get('/1/members/me', { cards: 'open' }, (err) => {
        if (err) throw err;
      });
    }
  }
  render() {
    const style = {
      padding: 0,
      textAlign: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    };
    const { trello } = this.state;
    return (
      <div className="trello-widget">
        <h1>Trello</h1>


        <List style={style}>
          { trello && (
          <ListItem containerElement={<ApiKey data={[trello]} addTrelloInfo={this.handleData} />} />
        )}
          {
        trello && trello.length !== 0 ?

          <div>
            {trello.map(list => (
              <MainInfo key={list.id} list={list} />
          ))}
          </div>

          :
          <Spinner />
      }
        </List>
      </div>
    );
  }
}
