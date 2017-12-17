import React from 'react';
import Trello from 'node-trello';

import './trello.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';
import ApiKey from './ApiKey';
import { List, ListItem } from 'material-ui/List';
import {cyan100, lightBlack} from 'material-ui/styles/colors';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this)  
    this.state = { trello: [] };
  }
  componentWillMount(){
    const local = localStorage.getItem('trello-db')
    if (local === null) {
      localStorage.setItem(`trello-db`, JSON.stringify([]))
    }
  }
  componentDidMount() {
    this.handleData()
  }

  handleState(trello){
    this.setState({ trello })
  }

  handleData = () => {
    const trello = JSON.parse(localStorage.getItem('trello-db'))
    if (trello.api_key && trello.token && trello.board_id) {
      const t = new Trello(trello.api_key, trello.token);

      t.get(`/1/boards/${trello.board_id}/lists`, { cards: "open" }, function(err, trello) {
        if (err) throw err;
        this.handleState(trello)
        console.log(trello);
     }.bind(this));

      // URL arguments are passed in as an object.
      t.get("/1/members/me", { cards: "open" }, function(err, data) {
        if (err) throw err;
        console.log(data)
      });
    }
  }
  render() {
    const { trello } = this.state;
    return (
      <div className="activity">
        <h1>Trello</h1>

        { console.log(trello) }
        { trello && (
          <ApiKey data={[ trello ]} addTrelloInfo={this.handleData}/>
        )}
            
      <div className="header">
        <h3>Board:</h3><h3>List:</h3>
      </div>

      <ul className="m-0">
      {
        trello && trello.length !== 0 ?

        <div>
          {trello.map(list => (
          <div key={`${list.created}`}>
            <ListItem
              primaryTogglesNestedList={true}
              autoGenerateNestedIndicator={false}
              primaryText={
              <div>
                <div style={{fontSize: "18px", fontWeight: 200}}>{list.name}</div>
                <div style={{color: lightBlack, fontSize: "0.7em"}}>
                  {list.cards.length}
              </div>
              </div>
              }
              nestedItems= {list.cards.map(p => (
                <ListItem style={{whiteSpace: "pre-wrap", fontSize: "14px", fontWeight: 400}} disabled={true} key={p.id} primaryText={p.name}/>
                ))}
              
              hoverColor={cyan100}
              />
            </div>
          ))}
          </div>

          :
          <Spinner/>
      }
    </ul>
  </div>
    );
  }
}
