import React from 'react';
import Trello from 'node-trello';
import { List, ListItem } from 'material-ui/List';
import Done from 'material-ui/svg-icons/action/done';
import Report from 'material-ui/svg-icons/action/report-problem';
import Setting from 'material-ui/svg-icons/action/settings';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import './trello.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';
import ApiKey from './ApiKey';

const done = <Done/>
const report_problem = <Report/>
const settings = <Setting/>

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = { trello: [], selectedIndex: 0, };
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

  select = (index) => this.setState({selectedIndex: index});

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
          {
          trello && trello.length !== 0 ?
            <div>
              {trello.map(( list, index ) => (
                <div>
                  <MainInfo key={list.id} list={list} />
                </div>
              ))}
            </div>
          :
          <div>
            { trello && (
            <ListItem containerElement={<ApiKey data={[trello]} addTrelloInfo={this.handleData} />} />
            )}
          </div>
          }
        </List>
      </div>
    );
  }
}
