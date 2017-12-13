import React from 'react';
import './trello.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="activity">
        <h1>Trello example card</h1>
        <div className="header">
          <h3>Board:</h3><h3>List:</h3>
        </div>
        <ul className="m-0">
          {console.log(data.data)}
          {
            data.data?

            <MainInfo data={data.data} />
            :
            <Spinner/>
          }
        </ul>
      </div>
    );
  }
}
