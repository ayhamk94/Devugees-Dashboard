import React from 'react';
import './activity.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = 'https://api.github.com/repos/ayhamk94/Devugees-Dashboard/issues/events';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="activity">
        <h1>Github activity</h1>
        <div class="header">
          <h3>User:</h3><h3>Event:</h3>
        </div>
        <ul class="m-0">
          {
            data.length > 1 ?

            data.map((data, i) => <MainInfo key={i} data={data} />)
            :
            <Spinner/>
          }
        </ul>
      </div>
    );
  }
}
